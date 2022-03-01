import {
  createStore,
  createHook,
  BoundActions,
  HookFunction,
} from 'react-sweet-state';
import * as actions from './clients_actions';
import { ClientState as State } from './types';

type Actions = typeof actions;

const initialState: State = {
  data: [],
  loading: false,
};

const Store = createStore<State, Actions>({
  name: 'clients',
  initialState,
  actions,
});

const useClient: HookFunction<State, BoundActions<State, Actions>, void> = createHook(Store);
export default useClient;
