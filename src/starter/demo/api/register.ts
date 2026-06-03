const SW_URL = "/demo-api-sw.js";

/**
 * Enregistre le Service Worker qui intercepte /mock-api/*.
 * Idempotent : safe à rappeler après HMR.
 */
export async function registerDemoApiServiceWorker(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if (!("serviceWorker" in navigator)) {
    console.warn("[demo-api] Service Workers non supportés");
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
    console.error("[demo-api] Échec enregistrement SW", error);
    return undefined;
  }
}
