import { Action } from 'react-sweet-state';
import { front_client } from '../fetcher';
import { ClientData, ClientModel, ClientState } from '../types';

export const load = (): Action<ClientState> => async ({ setState, getState }) => {
  if (getState().loading) return;
  if (getState().data_loaded) return;
  setState({
    loading: true,
    data: [],
  });
  const res = await front_client.get('/api/client');

  setState({
    loading: false,
    data: res.data,
    data_loaded: true,
  });
};

export const add = (client_data: Partial<ClientData>):
Action<ClientState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  const res = await front_client.post('/api/client', client_data);
  const new_data = res.data as ClientModel;

  setState({ data: [...data, new_data], loading: false });
};

export const remove = (id:string):
Action<ClientState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  await front_client.delete(`/api/client/${id}`);
  const new_state = data.filter((e) => e._id !== id);
  setState({ data: new_state, loading: false });
};

export const edit = (id:string, client_data: Partial<ClientData>):
Action<ClientState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  const res = await front_client.post(`/api/client/${id}`, client_data);
  const new_data = res.data as ClientModel;
  const old_data = data.filter((client) => client._id !== id);

  setState({ data: [...old_data, new_data], loading: false });
};
