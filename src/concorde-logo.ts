import {html} from "lit";

/** Plane silhouette of the Concorde docs logo (viewBox 0 0 66 66). */
const PLANE =
  "M33.2499 62.03C33.8799 59.24 34.26 56.17 34.39 53.08C34.57 52.78 34.9099 52.6 35.2599 52.64H35.39C35.48 52.64 35.5799 52.64 35.6899 52.64H35.7599C35.7599 52.64 35.7999 52.64 35.8299 52.64C36.2499 52.62 36.6799 52.58 36.9099 52.56C36.9399 52.56 36.9599 52.56 36.9799 52.56C37.0099 52.56 37.0299 52.56 37.0499 52.56H37.0899L37.2099 51.93H37.4799L37.5799 52.4L37.6899 52.49H39.2699L39.39 52.38L39.5099 51.93H39.7899L39.8399 52.21L39.9999 52.29L45.2099 51.86L46.2799 51.29C46.2799 51.29 46.2799 50.85 46.2399 50.25V50.18C46.2399 50.18 46.2399 50.13 46.2399 50.11C46.2099 49.62 46.1399 49.13 46.0399 48.65C45.7899 47.45 45.29 46 42.2 41.58C39.11 37.16 38.04 35.52 35.89 27.63C35.85 27.48 35.8199 27.35 35.7899 27.2C35.1399 24.53 34.6899 22.95 34.5199 22.38V10.89C34.4999 9.60996 34.3999 8.33996 34.2099 7.07996C34.0499 5.97996 33.6099 4.89996 33.3499 3.95996H32.6299C32.3599 4.89996 31.9299 5.97996 31.7699 7.06996C31.5799 8.33996 31.4799 9.60996 31.4599 10.89V22.38C31.2899 22.95 30.8299 24.52 30.1899 27.2C30.1599 27.35 30.1199 27.49 30.0899 27.63C27.9499 35.52 26.8699 37.16 23.7799 41.58C20.6899 46 20.1899 47.45 19.9399 48.65C19.8399 49.13 19.7799 49.62 19.7399 50.11C19.7399 50.13 19.7399 50.16 19.7399 50.18V50.25C19.6999 50.85 19.7 51.29 19.7 51.29L20.7699 51.86L25.9799 52.29L26.14 52.21L26.1899 51.93H26.4799L26.5999 52.38L26.7299 52.49H28.2999L28.4099 52.4L28.5099 51.93H28.7699L28.89 52.56H28.9399C28.9399 52.56 28.9799 52.56 29.0099 52.56C29.0299 52.56 29.0499 52.56 29.0799 52.56C29.3099 52.58 29.7499 52.63 30.1599 52.64C30.1799 52.64 30.2099 52.64 30.2299 52.64H30.2999C30.4099 52.64 30.5099 52.64 30.5999 52.64H30.7299C31.0799 52.6 31.4299 52.77 31.6099 53.08C31.7299 56.17 32.1099 59.24 32.7399 62.03H33.2499Z";

/** Concorde logo (same as concorde.supersoniks.org): ink disc, plane cut out, nose at 55°. */
export function concordeLogo(className = "size-8") {
  return html`
    <svg
      class="${className} shrink-0 inline-block rotate-[55deg]"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="33" cy="33" r="30" fill="var(--sc-base-content)" />
      <path class="concorde-plane" d=${PLANE} fill="var(--sc-base)" />
    </svg>
  `;
}

/** Brand: logo + italic wordmark, as in the docs header. */
export function concordeBrand(options?: {size?: "sm" | "lg"; href?: string}) {
  const lg = options?.size === "lg";
  const brand = html`
    <span class="concorde-brand inline-flex items-end gap-x-1">
      ${concordeLogo(lg ? "size-16 sm:size-20" : "size-7 sm:size-[2.4rem]")}
      <span
        class=${lg
          ? "font-headings text-6xl sm:text-7xl leading-none italic font-semibold"
          : "font-headings text-2xl sm:text-4xl leading-none italic font-semibold"}
        >concorde</span
      >
    </span>
  `;
  if (!options?.href) return brand;
  return html`<a
    href=${options.href}
    class="concorde-brand inline-block text-inherit no-underline"
    >${brand}</a
  >`;
}
