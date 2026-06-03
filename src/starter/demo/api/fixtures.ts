import type {GeoCommuneRow, ReqresUser} from "./types";

export const DEMO_USER: ReqresUser = {
  id: 2,
  email: "janet.weaver@demo.local",
  first_name: "Janet",
  last_name: "Weaver",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=janet-weaver",
};

const DEMO_USER_SEEDS: Omit<ReqresUser, "id">[] = [
  {
    email: "george.bluth@demo.local",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=george-bluth",
  },
  {
    email: "janet.weaver@demo.local",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=janet-weaver",
  },
  {
    email: "emma.wong@demo.local",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma-wong",
  },
  {
    email: "eve.holt@demo.local",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=eve-holt",
  },
  {
    email: "charles.morris@demo.local",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=charles-morris",
  },
  {
    email: "tracey.ramos@demo.local",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tracey-ramos",
  },
  {
    email: "michael.angelo@demo.local",
    first_name: "Michael",
    last_name: "Angelo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael-angelo",
  },
  {
    email: "lindsay.ferguson@demo.local",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lindsay-ferguson",
  },
  {
    email: "tobias.funke@demo.local",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tobias-funke",
  },
  {
    email: "byron.fields@demo.local",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=byron-fields",
  },
  {
    email: "gretchen.chen@demo.local",
    first_name: "Gretchen",
    last_name: "Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gretchen-chen",
  },
  {
    email: "rachel.green@demo.local",
    first_name: "Rachel",
    last_name: "Green",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rachel-green",
  },
  {
    email: "monica.geller@demo.local",
    first_name: "Monica",
    last_name: "Geller",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=monica-geller",
  },
  {
    email: "phoebe.buffay@demo.local",
    first_name: "Phoebe",
    last_name: "Buffay",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=phoebe-buffay",
  },
  {
    email: "joey.tribbiani@demo.local",
    first_name: "Joey",
    last_name: "Tribbiani",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joey-tribbiani",
  },
  {
    email: "ross.geller@demo.local",
    first_name: "Ross",
    last_name: "Geller",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ross-geller",
  },
  {
    email: "chandler.bing@demo.local",
    first_name: "Chandler",
    last_name: "Bing",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chandler-bing",
  },
  {
    email: "leslie.knope@demo.local",
    first_name: "Leslie",
    last_name: "Knope",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=leslie-knope",
  },
  {
    email: "ron.swanson@demo.local",
    first_name: "Ron",
    last_name: "Swanson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ron-swanson",
  },
  {
    email: "april.ludgate@demo.local",
    first_name: "April",
    last_name: "Ludgate",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=april-ludgate",
  },
  {
    email: "ann.perkins@demo.local",
    first_name: "Ann",
    last_name: "Perkins",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ann-perkins",
  },
];

export const DEMO_USERS: ReqresUser[] = DEMO_USER_SEEDS.map((user, index) => ({
  ...user,
  id: index + 1,
}));

export const DEMO_COMMUNES: GeoCommuneRow[] = [
  {nom: "Paris", code: "75056"},
  {nom: "Lyon", code: "69123"},
  {nom: "Marseille", code: "13055"},
  {nom: "Toulouse", code: "31555"},
  {nom: "Nantes", code: "44109"},
];

/** Filter users for mock search (first name, last name, email). */
export function filterDemoUsers(
  users: ReqresUser[],
  query: string | null | undefined,
): ReqresUser[] {
  const q = query?.trim().toLowerCase();
  if (!q) return users;
  return users.filter((user) => {
    const haystack =
      `${user.first_name} ${user.last_name} ${user.email}`.toLowerCase();
    return haystack.includes(q);
  });
}
