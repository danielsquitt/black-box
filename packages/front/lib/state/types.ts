interface Document {
  _id: string,
  created_at: string,
  updated_at: string,
}

export interface ClientData {
  name: string,
  address: string,
  city: string,
  zip: string,
  country: string,
  img: string,
}

export interface ClientModel extends Document, ClientData {}

export type ClientState = {
  data: Array<ClientModel>,
  loading: boolean,
};
