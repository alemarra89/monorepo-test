import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import { preloginReducer } from "@sparkasse/commons";

/*
import { reducer as reportsReducer } from "@illimity/reports";
import movementsListReducer from "@illimity/commons/src/movements/reducers";
import { disambiguationState } from "@illimity/rtl-disambiguation-state";
*/

const appReducer = rootNavigator =>
  combineReducers({
    router: createNavigationReducer(rootNavigator),
    prelogin: preloginReducer
  })

const rootReducer = rootNavigator => {
  return appReducer(rootNavigator);
};

export default rootReducer;