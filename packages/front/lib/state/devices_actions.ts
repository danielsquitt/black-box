import { Action } from 'react-sweet-state';
import { front_client } from '../fetcher';
import {
  DeviceData, DeviceModel, DeviceState,
} from '../types';

export const load = ():
Action<DeviceState> => async ({ setState, getState }) => {
  if (getState().loading) return;
  if (getState().data_loaded) return;
  setState({
    loading: true,
    data: [],
  });
  const res = await front_client.get('/api/device');

  setState({
    loading: false,
    data: res.data,
    data_loaded: true,
  });
};

export const add = (device_data: Partial<DeviceData>):
Action<DeviceState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  const res = await front_client.post('/api/device', device_data);
  const new_data = res.data as DeviceModel;

  setState({ data: [...data, new_data], loading: false });
};

export const remove = (id:string):
Action<DeviceState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  await front_client.delete(`/api/device/${id}`);
  const new_state = data.filter((e) => e._id !== id);
  setState({ data: new_state, loading: false });
};

export const clear = ():
Action<DeviceState> => async ({ setState }) => {
  setState({
    data: [],
    data_loaded: false,
  });
};

export const edit = (id:string, client_data: Partial<DeviceData>):
Action<DeviceState> => async ({ setState, getState }) => {
  setState({ loading: true });
  const { data } = getState();
  const res = await front_client.post(`/api/device/${id}`, client_data);
  const new_data = res.data as DeviceModel;
  const old_data = data.filter((device) => device._id !== id);

  setState({ data: [...old_data, new_data], loading: false });
};
