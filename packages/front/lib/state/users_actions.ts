import { Action } from 'react-sweet-state';
import { client } from '../fetcher';
import {
  UserData, UserModel, UserState,
} from '../types';

export const load = (reload:boolean, user_sub: string | null | undefined):
Action<UserState> => async ({ setState, getState }) => {
  if (getState().loading) return;
  if (getState().data.length && !reload) return;

  setState({
    loading: true,
    data: [], // reset
  });
  const res = await client.get('/user');

  console.log(res.data);
  console.log(user_sub);

  const current = res.data.find((user:Partial<UserModel>) => user.user_id === user_sub);
  const data = res.data.filter((user:Partial<UserModel>) => user.user_id !== user_sub);

  setState({
    loading: false,
    current,
    data,
  });
};

export const add = (user_data: Partial<UserData>):
Action<UserState> => async ({ setState, getState }) => {
  const { data } = getState();
  const res = await client.post('/user', user_data);
  const new_data = res.data as UserModel;

  setState({ data: [...data, new_data] });
};

export const remove = (id:string):
Action<UserState> => async ({ setState, getState }) => {
  const { data } = getState();
  await client.delete(`/user/${id}`);
  const new_state = data.filter((e) => e._id !== id);
  setState({ data: new_state });
};

export const edit = (id:string, client_data: Partial<UserData>):
Action<UserState> => async ({ setState, getState }) => {
  const { data } = getState();
  const res = await client.post(`/user/${id}`, client_data);
  const new_data = res.data as UserModel;

  setState({ data: [...data, new_data] });
};
