import React, { Props } from 'react';
import logo from './logo.svg';
import './App.css';

import moment from "moment";

import {getPrelogin} from "@sparkasse/commons";

const App: React.FC<Props<any>> = (props: any) => {

  console.log('mario', typeof props);

  // getPrelogin();

  console.log('moment web', moment());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <br />
          Ma soprattutto GRANDE CORVINO!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => {props.onGetPreloginClick()}} value="test">Test</button>
      </header>
    </div>
  );
}

export default App;
