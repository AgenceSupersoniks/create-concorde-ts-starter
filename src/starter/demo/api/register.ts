const SW_URL = "/demo-api-sw.js";

/**
 * Registers the Service Worker that intercepts /mock-api/*.
 * Idempotent: safe to call again after HMR.
 */
export async function registerDemoApiServiceWorker(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if (!("serviceWorker" in navigator)) {
    console.warn("[demo-api] Service Workers not supported");
    return undefined;
  }

  try {
    const registration = await navigator.serviceWorker.register(SW_URL, {
      scope: "/",
    });

    if (registration.waiting) {
      await registration.update();
    }

    await navigator.serviceWorker.ready;
    return registration;
  } catch (error) {
    console.error("[demo-api] Service Worker registration failed", error);
    return undefined;
  }
}
