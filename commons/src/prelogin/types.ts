import { Reducer } from "redux";

export const GET_PRELOGIN_START: string = 'prelogin/get-prelogin-start';
export const GET_PRELOGIN_SUCCESS: string = 'prelogin/get-prelogin-success';
export const GET_PRELOGIN_ERROR: string = 'prelogin/get-prelogin-error';

export interface PreloginState {
    codiceGruppo: string;
    codiceIstituto: number;
    codiceAbi: string;
}

export interface RootState {
    nav: Reducer,
    prelogin: PreloginState
}

export interface ErrorState {
    httpStatus: number,
    codiceErrore: string,
    descrizioneErrore?: string
}

export interface PreloginParams {
    abi: string,
    canale: string
}

export interface GetPreloginStartAction {
  type: typeof GET_PRELOGIN_START
}

export interface GetPreloginSuccessAction {
  type: typeof GET_PRELOGIN_START,
  payload: PreloginState
}

export interface GetPreloginErrorAction {
  type: typeof GET_PRELOGIN_ERROR,
  payload: ErrorState
}

export type PreloginActionTypes = GetPreloginStartAction | GetPreloginSuccessAction | GetPreloginErrorAction;
