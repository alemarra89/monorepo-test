// @flow
import { createStore, applyMiddleware, compose } from "redux";
// import LogRocket from "logrocket";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { routerMiddleware, push } from "connected-react-router";
// import { BASE_API_URLS_KEYS } from "@illimity/rtl-commons";
// import IllimityGTM from "@illimity/commons/src/rtl-gtm";
// import { RESET_APP } from "@illimity/commons/src/rtl-login-sca-state";
import createRootReducer from "./reducers";
// import client from "./helpers/SmartLookService";

/*
export const getEnvironmentVariables = () => {
  return {
    stsEnv: process.env.REACT_APP_STS_REF_ENV,
    clientId: process.env.REACT_APP_CLIENT_ID,
    gestPayKey: process.env.REACT_APP_GEST_PAY_KEY,
    gestPayShopLogin: process.env.REACT_APP_GEST_PAY_SHOP_LOGIN,
    gestPayRequestToken: process.env.REACT_APP_GEST_PAY_REQUEST_TOKEN,
    gestPayKey2: process.env.REACT_APP_GEST_PAY_KEY_2,
    gestPayShopLogin2: process.env.REACT_APP_GEST_PAY_SHOP_LOGIN_2,
    baseSiteUrl: process.env.REACT_APP_BASE_URL,
    baseApiUrl: {
      [BASE_API_URLS_KEYS.LOGIN]: process.env.REACT_APP_LOGIN_URL,
      [BASE_API_URLS_KEYS.BANK]: process.env.REACT_APP_BANK_URL,
      [BASE_API_URLS_KEYS.ONBOARDING]: process.env.REACT_APP_ONBOARDING_URL,
      [BASE_API_URLS_KEYS.NEW_LOGIN]: process.env.REACT_APP_NEW_LOGIN_URL,
      [BASE_API_URLS_KEYS.LOCALIZATION]: process.env.REACT_APP_LOCALIZATION_URL,
      [BASE_API_URLS_KEYS.GEST_PAY]: process.env.REACT_APP_GEST_PAY
    }
  };
};
*/

const myStorageGet = param => {
  return sessionStorage.getItem(param);
};

const myStorageSet = (param, value) => {
  sessionStorage.setItem(param, value);
};

const asyncStorageGet = key => {
  const value = sessionStorage.getItem(key);
  return Promise.resolve(value);
};

const asyncStorageSet = (key, value) => {
  sessionStorage.setItem(key, value);
  return Promise.resolve();
};

const resetEnhancer = rootReducer => (state, action) => {
  return rootReducer(state, action);
};

const createEnhancers = () => {
  // const environment = getEnvironmentVariables();
  const middlewares = [
    thunk.withExtraArgument({
      authSelector: () => ({}),
      fetchRuntime: fetch,
      platform: "web",
      navigateAction: dispatch => route => dispatch(push(route)),
      storeItem: myStorageSet,
      getItem: myStorageGet,
      asyncStorageGet,
      asyncStorageSet,
      // ...environment
    }),
    // LogRocket.reduxMiddleware(),
    // IllimityGTM.createGTMMiddleware(IllimityGTM.eventsMap)
  ];

  /*
  if (process.env.NODE_ENV !== "production") {
    // const whyDidYouRender = require('@welldone-software/why-did-you-render');
    // whyDidYouRender(React);
    middlewares.push(createLogger());
  }
  */

  middlewares.push(routerMiddleware(history));

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );

  return enhancer;
};

const setupHMR = store => {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers");
    store.replaceReducer(nextRootReducer);
  });
};

export const history = createBrowserHistory();

const configureStore = () => {
  const store = createStore(
    resetEnhancer(createRootReducer(history)),
    createEnhancers()
  );

  console.log(module);
  if (module.hot) {
    setupHMR(store);
  }

  /*
  switch (process.env.REACT_APP_ENV) {
    case "UAT":
      client.init(process.env.REACT_APP_SMARTLOOK_KEY);
      break;
    case "PRD":
      client.init(process.env.REACT_APP_SMARTLOOK_KEY);
      break;
  }
  */

  return store;
};

export default configureStore;
