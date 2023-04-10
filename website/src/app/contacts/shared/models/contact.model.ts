export interface Contact {
  id: number;
  name?: string;
  email?: string;
  number?: string;
  country?: string;
  favorite?: boolean;
}
export interface HTTPContactsResponse {
  data: Contact[];
}
