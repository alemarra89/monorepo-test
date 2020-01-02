import { createSelector } from "reselect";
import { PreloginState } from "./types";

export const preloginReducer = (state: PreloginState) => state;


export const preloginData = createSelector(
  preloginReducer,
  state => {
    console.log(state);
    return state;
  }
);

