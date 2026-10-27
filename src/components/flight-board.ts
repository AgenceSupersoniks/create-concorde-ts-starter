import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import "@supersoniks/concorde/badge";
import "@supersoniks/concorde/icon";
import "@supersoniks/concorde/input";
import "@supersoniks/concorde/list";
import "@supersoniks/concorde/switch";
import {DataProviderKey, subscribe} from "@supersoniks/concorde/decorators";
import tailwind from "@tailwind";

type Flight = {
  time: string;
  code: string;
  city: string;
  airport: string;
  gate: string;
  delayed: boolean;
};

/** Store entry written by the form fields (formDataProvider + name). */
type FlightFilter = {q: string; status: "delayed" | null};

const flightFilterKey = new DataProviderKey<FlightFilter>("flightFilter");

const FLIGHTS: Flight[] = [
  {
    time: "07:05",
    code: "AF 006",
    city: "New York",
    airport: "JFK",
    gate: "K42",
    delayed: false,
  },
  {
    time: "07:40",
    code: "BA 305",
    city: "London",
    airport: "LHR",
    gate: "E21",
    delayed: true,
  },
  {
    time: "08:15",
    code: "LH 1027",
    city: "Frankfurt",
    airport: "FRA",
    gate: "F33",
    delayed: false,
  },
  {
    time: "09:30",
    code: "AF 1680",
    city: "Rome",
    airport: "FCO",
    gate: "F12",
    delayed: false,
  },
  {
    time: "10:10",
    code: "AZ 333",
    city: "Milan",
    airport: "LIN",
    gate: "G08",
    delayed: true,
  },
  {
    time: "11:45",
    code: "AF 7700",
    city: "Nice",
    airport: "NCE",
    gate: "D04",
    delayed: false,
  },
  {
    time: "12:20",
    code: "IB 3437",
    city: "Madrid",
    airport: "MAD",
    gate: "E35",
    delayed: false,
  },
  {
    time: "13:55",
    code: "AF 456",
    city: "Rio de Janeiro",
    airport: "GIG",
    gate: "M27",
    delayed: true,
  },
];

const flightRow = (f: Flight) => html`
  <div
    class="grid grid-cols-[3.5rem_4.5rem_1fr_auto] items-center gap-3 py-2 text-sm border-b border-neutral-200"
  >
    <span class="font-mono">${f.time}</span>
    <span class="font-mono">${f.code}</span>
    <span class="truncate">
      ${f.city} <span class="text-neutral-600">(${f.airport})</span>
      <span class="hidden sm:inline text-neutral-600">· gate ${f.gate}</span>
    </span>
    <sonic-badge size="xs" type=${f.delayed ? "warning" : "success"}>
      ${f.delayed ? "Delayed" : "On time"}
    </sonic-badge>
  </div>
`;

/** Departure board: search by city, airport or flight number, toggle delayed only. */
@customElement("app-flight-board")
export class AppFlightBoard extends LitElement {
  static styles = [tailwind];

  @subscribe(flightFilterKey.q)
  @state()
  query = "";

  @subscribe(flightFilterKey.status)
  @state()
  status: FlightFilter["status"] = null;

  private get flights() {
    const q = (this.query ?? "").trim().toLowerCase();
    return FLIGHTS.filter(
      (f) =>
        (!q || `${f.code} ${f.city} ${f.airport}`.toLowerCase().includes(q)) &&
        (this.status !== "delayed" || f.delayed)
    );
  }

  render() {
    const flights = this.flights;
    return html`
      <div class="flex flex-col gap-5 p-5 sm:p-6 border-2 border-current">
        <div
          formDataProvider=${flightFilterKey.path}
          class="grid sm:grid-cols-[1fr_auto] items-end gap-4"
        >
          <sonic-input
            name="q"
            type="search"
            label="Search flights"
            placeholder="City, airport or flight number"
          >
            <sonic-icon
              slot="prefix"
              library="iconoir"
              name="search"
            ></sonic-icon>
          </sonic-input>
          <sonic-switch name="status" value="delayed"
            >Delayed only</sonic-switch
          >
        </div>

        <div class="flex flex-col gap-2">
          <span
            class="font-mono text-xs uppercase tracking-widest text-neutral-600"
          >
            ${flights.length} / ${FLIGHTS.length} departures · Paris CDG
          </span>
          <sonic-list
            dataProvider="flightBoardRows"
            .props=${flights}
            .items=${flightRow}
            .noItems=${() =>
              html`<p class="py-6 text-sm text-neutral-600">
                No flight matches.
              </p>`}
          ></sonic-list>
        </div>
      </div>
    `;
  }
}
