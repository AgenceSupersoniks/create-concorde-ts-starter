import {DEMO_COMMUNES, DEMO_USER, DEMO_USERS, filterDemoUsers} from "./fixtures";
import type {
  GeoCommuneRow,
  ReqresUserResponse,
  ReqresUsersListResponse,
} from "./types";

const MOCK_PREFIX = "/mock-api";

function json(
  body: unknown,
  init: ResponseInit & {delayMs?: number} = {},
): Promise<Response> {
  const {delayMs = 0, ...responseInit} = init;
  const headers = new Headers(responseInit.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("X-Demo-Api", "concorde-starter");

  const build = () =>
    new Response(JSON.stringify(body), {
      ...responseInit,
      headers,
    });

  if (delayMs <= 0) return Promise.resolve(build());
  return new Promise((resolve) => setTimeout(() => resolve(build()), delayMs));
}

function errorStatus(url: URL): number | null {
  const raw = url.searchParams.get("status");
  if (!raw) return null;
  const code = parseInt(raw, 10);
  return Number.isFinite(code) ? code : null;
}

function delayMs(url: URL): number {
  const raw = url.searchParams.get("delay");
  if (!raw) return 0;
  const ms = parseInt(raw, 10);
  return Number.isFinite(ms) ? Math.min(ms, 5000) : 0;
}

function paginateUsers(url: URL): ReqresUsersListResponse {
  const q = url.searchParams.get("q");
  const filtered = filterDemoUsers(DEMO_USERS, q);

  const limit = Math.max(
    1,
    parseInt(
      url.searchParams.get("limit") ||
        url.searchParams.get("per_page") ||
        "4",
      10,
    ),
  );

  const offset = Math.max(0, parseInt(url.searchParams.get("offset") || "0", 10));

  const pageFromQuery = url.searchParams.get("page");
  const start = pageFromQuery
    ? (Math.max(1, parseInt(pageFromQuery, 10)) - 1) * limit
    : offset;

  const slice = filtered.slice(start, start + limit);
  const page = pageFromQuery
    ? Math.max(1, parseInt(pageFromQuery, 10))
    : Math.floor(start / limit) + 1;

  return {
    data: slice,
    page,
    per_page: limit,
    total: filtered.length,
    total_pages: Math.max(1, Math.ceil(filtered.length / limit)),
  };
}

/**
 * Handles requests whose pathname starts with /mock-api/.
 * Returns null if the route is not handled.
 */
export async function handleMockApiRequest(
  request: Request,
): Promise<Response | null> {
  const url = new URL(request.url);
  if (!url.pathname.startsWith(MOCK_PREFIX)) return null;
  if (request.method !== "GET") {
    return json({error: "Method not allowed"}, {status: 405});
  }

  const forcedStatus = errorStatus(url);
  const wait = delayMs(url);

  if (forcedStatus && forcedStatus >= 400) {
    return json(
      {error: "Simulated error", status: forcedStatus},
      {status: forcedStatus, delayMs: wait},
    );
  }

  const subPath = url.pathname.slice(MOCK_PREFIX.length) || "/";

  if (subPath === "/health") {
    return json({ok: true, service: "concorde-starter-demo-api"}, {delayMs: wait});
  }

  const userMatch = subPath.match(/^\/users\/(\d+)$/);
  if (userMatch) {
    const id = parseInt(userMatch[1], 10);
    const user = DEMO_USERS.find((u) => u.id === id) ?? {
      ...DEMO_USER,
      id,
    };
    const body: ReqresUserResponse = {data: user};
    return json(body, {delayMs: wait});
  }

  if (subPath === "/users") {
    return json(paginateUsers(url), {delayMs: wait});
  }

  if (subPath === "/communes") {
    const limit = Math.max(
      1,
      parseInt(url.searchParams.get("limit") || "5", 10),
    );
    const rows: GeoCommuneRow[] = DEMO_COMMUNES.slice(0, limit);
    return json(rows, {delayMs: wait});
  }

  return json({error: "Not found", path: subPath}, {status: 404, delayMs: wait});
}

/** Pathname prefix expected by the router (without origin). */
export const MOCK_API_PATH_PREFIX = MOCK_PREFIX;
