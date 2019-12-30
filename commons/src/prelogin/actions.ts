import { Action, AnyAction } from "redux";

import { ThunkAction } from 'redux-thunk'

import * as types from './types';
import { UserState } from './reducer';

/*
export interface GetPreloginStart extends Action {
    type: string;
}


export function getPreloginStart(): Action {
    return {
        type: types.GET_PRELOGIN_START
    }
}
*/


export interface ExtAction extends Action {
  type: string;
  payload?: object;
}


export function getPreloginStart(): AnyAction {
  console.log('consolloggo cose qua');
  return {
    type: types.GET_PRELOGIN_START,
    payload: {}
  }
}

export const thunkSendMessage = (message: string): ThunkAction<void, UserState, null, Action<string>> => async dispatch => {
  const asyncResp = await exampleAPI()
  dispatch(getPreloginSuccess(asyncResp))
}
function exampleAPI() {
  return Promise.resolve('Async Chat Bot')
}



export function getPreloginSuccess(payload: any): ExtAction {
  return {
    type: types.GET_PRELOGIN_SUCCESS,
    payload
  }
}

/*

export const fetchAuthorityEntities = () => async (
  dispatch,
  _,
  extraArguments
) => {
  dispatch(fetchAuthorityEntitiesStart());
  //dispatch(showLoader(LoadersKey.profile.identityDocument.entities));
  try {
    const response = await api(extraArguments)(
      fetchPost(FETCH_AUTHORITY_ENTITIES_URL, {}, {})
    );
    dispatch(fetchAuthorityEntitiesSuccess(response.data));
  } catch (err) {

  } finally {
  //dispatch(hideLoader(LoadersKey.profile.identityDocument.entities));
  }
};

*/
