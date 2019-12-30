import { GET_PRELOGIN_START, GET_PRELOGIN_SUCCESS, GET_PRELOGIN_ERROR } from './types';
import { ExtAction } from './actions';

export interface UserState {
  logged: boolean,
  name: string
};

const initialState: UserState = {
  logged: false,
  name: ''
}

export function preloginReducer(
  state = initialState,
  action: ExtAction
): UserState {
  switch (action.type) {
    case GET_PRELOGIN_START:
      return {
        ...state
      }
    case GET_PRELOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        name: 'Mario Scalas'
      }
    case GET_PRELOGIN_ERROR:
      return {
        ...state,
        logged: false,
        name: ''
      }
    default:
      return state
  }
}
