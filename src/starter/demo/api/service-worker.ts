/// <reference lib="webworker" />
import {handleMockApiRequest} from "./router";

declare const self: ServiceWorkerGlobalScope;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const {request} = event;
  if (request.method !== "GET") return;

  event.respondWith(
    (async () => {
      const mocked = await handleMockApiRequest(request);
      if (mocked) return mocked;
      return fetch(request);
    })(),
  );
});
