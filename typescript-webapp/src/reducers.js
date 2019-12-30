import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import { reducer as formReducer } from "redux-form";
import { preloginReducer } from "@sparkasse/commons";

/*
import { reducer as reportsReducer } from "@illimity/reports";
import movementsListReducer from "@illimity/commons/src/movements/reducers";
import { disambiguationState } from "@illimity/rtl-disambiguation-state";
*/

export default history =>
  combineReducers({
    router: connectRouter(history),
    // form: formReducer,
    preloginReducer
  });
