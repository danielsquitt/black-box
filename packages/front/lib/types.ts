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

// User data
// ------------------------------------

export enum UserStateEnum {
  PENDING = 'pending', // User is pending to confirm
  CONFIRMED = 'confirmed', // User is confirmed
  DENY = 'deny', // User is denied
}

export enum UserRoleEnum {
  ADMIN = 'admin',
  OWNER = 'owner',
  PROD = 'prod',
}

export interface UserData {
  user_id: String,
  name: String,
  client_id: String,
  state:UserStateEnum,
  role:UserRoleEnum,
}

export interface UserModel extends Document, UserData {}

export type UserState = {
  data: Array<DeviceModel>,
  current: UserModel | undefined,
  loading: boolean,
};

// Auth0
// ------------------------------------

export type AuthPayload = {
  sub: string,
};
