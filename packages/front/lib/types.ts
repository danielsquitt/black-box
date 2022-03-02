// General document data
// ------------------------------------
interface Document {
  _id: string,
  created_at: string,
  updated_at: string,
}

// Client data
// ------------------------------------
export interface ClientData {
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  country: string,
  cif: string,
  img: string,
}

export interface ClientModel extends Document, ClientData {}

export type ClientState = {
  data: Array<ClientModel>,
  loading: boolean,
};

// Device data
// ------------------------------------
export interface DeviceData {
  alias: string,
  type: string,
  version: string,
  sw_v: string,
  client_id: string
}

export interface DeviceModel extends Document, DeviceData {}

export type DeviceState = {
  data: Array<DeviceModel>,
  loading: boolean,
};
