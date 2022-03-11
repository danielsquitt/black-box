import { Action } from 'react-sweet-state';
import { front_client } from '../fetcher';
import {
  UserData, UserModel, UserState,
} from '../types';

export const load = (user_sub: string | null | undefined):
Action<UserState> => async ({ setState, getState }) => {
  if (getState().loading) return;
  if (getState().data_loaded) return;
  setState({
    loading: true,
    current: undefined,
    data: [],
  });
  const res = await front_client.get('/api/user');
  const current = res.data.find((user: Partial<UserModel>) => user.user_id === user_sub);
  const data = res.data.filter((user: Partial<UserModel>) => user.user_id !== user_sub);
  setState({
    loading: false,
    current,
    data,
    data_loaded: true,
  });
};

export const add = (user_data: Partial<UserData>):
Action<UserState> => async ({ setState }) => {
  setState({ loading: true });
  const res = await front_client.post('/api/user', user_data);
  const new_data = res.data as UserModel;
  setState({ current: new_data, loading: false });
};

export const remove = (id: string):
Action<UserState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  await front_client.delete(`/api/user/${id}`);
  const new_state = data.filter((e) => e._id !== id);
  setState({ data: new_state });
};

export const clear = ():
Action<UserState> => async ({ setState }) => {
  setState({
    data: [],
    current: undefined,
    data_loaded: false,
  });
};

export const edit = (id: string, client_data: Partial<UserData>):
Action<UserState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  const old_data = data.filter((user) => user._id !== id);
  const res = await front_client.post(`/api/user/${id}`, client_data);
  const new_data = res.data as UserModel;
  setState({ data: [...old_data, new_data], loading: false });
};
