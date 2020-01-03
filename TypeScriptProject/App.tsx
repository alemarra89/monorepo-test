/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { createAppContainer } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import RootSwitchNavigator from './src/RootSwitchNavigator';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import rootReducer from './src/reducers';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware, createReduxContainer, createNavigationReducer } from 'react-navigation-redux-helpers';
import { preloginReducer } from '@sparkasse/commons';

declare var GLOBAL: any;
declare var global: any;
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
global.Blob = null

const AppNavigator = createAppContainer(RootSwitchNavigator);

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
  nav: navReducer,
  prelogin: preloginReducer
});

const middleware = createReactNavigationReduxMiddleware(
  (state:any) => state.nav,
);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);


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

const middlewares = [
  thunk.withExtraArgument({
    authSelector: () => ({}),
    fetchRuntime: fetch,
    platform: "desktop",
    storeItem: myStorageSet,
    getItem: myStorageGet,
    asyncStorageGet,
    asyncStorageSet,
    // ...environment
  }),
  // LogRocket.reduxMiddleware(),
  // IllimityGTM.createGTMMiddleware(IllimityGTM.eventsMap)
];

const enhancer = compose(
  applyMiddleware(middleware, ...middlewares), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  appReducer,
  enhancer
);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default Root;
