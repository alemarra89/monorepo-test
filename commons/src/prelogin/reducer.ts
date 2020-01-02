import { GET_PRELOGIN_SUCCESS, GET_PRELOGIN_ERROR, PreloginState } from './types';
import { AnyAction } from 'redux';

const initialState: PreloginState = {
  codiceAbi: '',
  codiceGruppo: '',
  codiceIstituto: 0
}

export function preloginReducer(
  state = initialState,
  action: AnyAction
): PreloginState {
  console.log('action', action);
  switch (action.type) {
    case GET_PRELOGIN_SUCCESS:
      console.log('action GET_PRELOGIN_SUCCESS', state);
      return {
        ...state,
        codiceAbi: action.payload.codiceAbi,
        codiceIstituto: action.payload.codiceIstituto,
        codiceGruppo: action.payload.codiceGruppo
      }
    case GET_PRELOGIN_ERROR:
      console.log('action GET_PRELOGIN_ERROR');
      return {
        ...initialState
      }
    default:
      return state
  }
}
