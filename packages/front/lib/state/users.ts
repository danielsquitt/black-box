import {
  createStore,
  createHook,
  BoundActions,
  HookFunction,
} from 'react-sweet-state';
import * as actions from './users_actions';
import { UserState as State } from '../types';

type Actions = typeof actions;

const initialState: State = {
  data: [],
  current: undefined,
  loading: false,
};

const Store = createStore<State, Actions>({
  name: 'users',
  initialState,
  actions,
});

const useUsers: HookFunction<State, BoundActions<State, Actions>, void> = createHook(Store);
export default useUsers;
