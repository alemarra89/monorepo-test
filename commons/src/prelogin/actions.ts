import { ThunkAction } from 'redux-thunk'

import {
  GET_PRELOGIN_START,
  GET_PRELOGIN_SUCCESS,
  GET_PRELOGIN_ERROR,
  PreloginParams,
  PreloginState,
  PreloginActionTypes,
  GetPreloginStartAction,
  GetPreloginSuccessAction,
  GetPreloginErrorAction,
  ErrorState
} from './types';

export function getPreloginStart(): GetPreloginStartAction {
  console.log('consolloggo cose qua');
  return {
    type: GET_PRELOGIN_START
  }
}

export function getPreloginSuccess(payload: PreloginState): GetPreloginSuccessAction {
  return {
    type: GET_PRELOGIN_SUCCESS,
    payload
  }
}

export function getPreloginError(payload: ErrorState): GetPreloginErrorAction {
  return {
    type: GET_PRELOGIN_ERROR,
    payload
  }
}

// export const getPrelogin = (preloginParams: PreloginParams): ThunkAction<void, PreloginState, null, Action<string>> => async (

// ThunkAction prende in input 4 parametri
// ThunkAction<ResultType, StateType, ExtraArgumentType, ActionType extends Action>
export const getPrelogin = (preloginParams: PreloginParams): ThunkAction<void, PreloginState, null, PreloginActionTypes> => async (
  dispatch,
  _,
  extraArguments
) => {
  // const asyncResp = await exampleAPI()
  console.log('asd', _, extraArguments);
  dispatch(getPreloginStart());

  let url = 'https://ihbnext.cedacri.it/hb3-api/api/public/prelogin';
  url += '?abi=' + preloginParams.abi;
  url += '&canale=' + preloginParams.canale;

  api<PreloginState | ErrorState>(url).then((preloginResponse) => {
    console.log('preloginResponse', preloginResponse);
    dispatch(getPreloginSuccess(preloginResponse as PreloginState));
  }).catch(error => {
    /* show error message */
    dispatch(getPreloginError(error as ErrorState));
  })


}



// Implementation code where T is the returned data shape
function api<T>(url: string): Promise<T> {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  var myInit: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };

  var myRequest = new Request(url, myInit);


  return fetch(myRequest)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })

}
