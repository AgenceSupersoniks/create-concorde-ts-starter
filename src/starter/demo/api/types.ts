/** reqres-compatible shape (key="data" on sonic-list / sonic-queue) */
export type ReqresUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ReqresUserResponse = {data: ReqresUser};

export type ReqresUsersListResponse = {
  data: ReqresUser[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type GeoCommuneRow = {nom: string; code: string};
