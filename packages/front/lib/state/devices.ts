import {
  createStore,
  createHook,
  BoundActions,
  HookFunction,
} from 'react-sweet-state';
import * as actions from './devices_actions';
import { DeviceState as State } from '../types';

type Actions = typeof actions;

const initialState: State = {
  data: [],
  loading: false,
};

const Store = createStore<State, Actions>({
  name: 'devices',
  initialState,
  actions,
});

const useDevice: HookFunction<State, BoundActions<State, Actions>, void> = createHook(Store);
export default useDevice;
