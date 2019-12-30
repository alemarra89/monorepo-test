import { createSelector } from 'reselect';

import { UserState } from './reducer';

export const isLogged = (state: UserState) => state.logged;


export const prelogin = (state: any) => state.preloginReducer;


export const getPreloginSelector = createSelector(prelogin, p => {
    return {
        p
    };
});