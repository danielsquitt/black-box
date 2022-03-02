import { Action } from 'react-sweet-state';
import { client } from '../fetcher';
import { ClientData, ClientModel, ClientState } from '../types';

// const CLIENTS: ClientModel[] = [
//   {
//     _id: '6215ed3ab7b2f4feff986c8d',
//     name: 'Cervezas Arriaca SL',
//     address: 'Avda De La Industria 3 A - Nave 6',
//     city: 'Yunquera de Henares, Guadalajara',
//     zip: '19210',
//     country: 'España',
//     img: 'https://arriaca.es/wp-content/uploads/2021/01/Arriaca-Favicon.png',
//     created_at: '2022-02-23T08:15:54.197Z',
//     updated_at: '2022-02-23T08:15:54.197Z',
//   },
//   {
//     _id: '6215ed3bb7b2f4feff986c90',
//     name: 'Maresme Brewery Sl.',
//     address: 'Calle Empedrat del Marxant, 1 - P 2 PTA. 3',
//     city: 'Alella, Barcelona',
//     zip: '08328',
//     country: 'España',
//     img: 'https://cdn.shopify.com/s/files/1/0254/8852/3345/files/MB_Logo_LLetres_300x300.png',
//     created_at: '2022-02-23T08:15:55.863Z',
//     updated_at: '2022-02-23T08:15:55.863Z',
//   },
//   {
//     _id: '6215ed3bb7b2f4feff986c92',
//     name: 'Cervecera Peninsula SL',
//     address: 'Calle de la Granja, 5',
//     city: 'Alcobendas, Madrid',
//     zip: '28108',
//     country: 'España',
//     img: 'https://cdn.shopify.com/s/files/1/0072/8419/5401/files/Logo_Peninsula-03_300x300.png',
//     created_at: '2022-02-23T08:15:55.868Z',
//     updated_at: '2022-02-23T08:15:55.868Z',
//   },
// ];

export const load = (reload:boolean): Action<ClientState> => async ({ setState, getState }) => {
  if (getState().loading) return;
  if (getState().data.length && !reload) return;

  setState({
    loading: true,
    data: [], // reset
  });
  const res = await client.get('/client');

  setState({
    loading: false,
    data: res.data,
  });
};

export const add = (client_data: Partial<ClientData>):
Action<ClientState> => async ({ setState, getState }) => {
  const { data } = getState();
  const res = await client.post('/client', client_data);
  const new_data = res.data as ClientModel;

  setState({ data: [...data, new_data] });
};

export const remove = (id:string):
Action<ClientState> => async ({ setState, getState }) => {
  const { data } = getState();
  await client.delete(`/client/${id}/delete`);
  const new_state = data.filter((e) => e._id !== id);
  setState({ data: new_state });
};

export const edit = (id:string, client_data: Partial<ClientData>):
Action<ClientState> => async ({ setState, getState }) => {
  const { data } = getState();
  const res = await client.post(`/client/${id}`, client_data);
  const new_data = res.data as ClientModel;

  setState({ data: [...data, new_data] });
};
