import { Action } from 'react-sweet-state';
import { client } from '../fetcher';
import {
  DeviceData, DeviceModel, DeviceState,
} from '../types';

export const load = (reload:boolean):
Action<DeviceState> => async ({ setState, getState }) => {
  if (getState().loading) return;
  if (getState().data.length && !reload) return;

  setState({
    loading: true,
    data: [], // reset
  });
  const res = await client.get('/device');

  setState({
    loading: false,
    data: res.data,
  });
};

export const add = (device_data: Partial<DeviceData>):
Action<DeviceState> => async ({ setState, getState }) => {
  const { data } = getState();
  const res = await client.post('/device', device_data);
  const new_data = res.data as DeviceModel;

  setState({ data: [...data, new_data] });
};

export const remove = (id:string):
Action<DeviceState> => async ({ setState, getState }) => {
  const { data } = getState();
  await client.delete(`/device/${id}`);
  const new_state = data.filter((e) => e._id !== id);
  setState({ data: new_state });
};

export const edit = (id:string, client_data: Partial<DeviceData>):
Action<DeviceState> => async ({ setState, getState }) => {
  const { data } = getState();
  const res = await client.post(`/device/${id}`, client_data);
  const new_data = res.data as DeviceModel;

  setState({ data: [...data, new_data] });
};
