import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Props } from './AppContainer';

const App: React.FC<Props> = props => {

  console.log('props', props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Premi il pulsante seguente e io farò una chiamata rest per recuperare il nome della tua banca</p>
        <button onClick={() => { props.onGetPreloginClick({ canale: 'mobile', abi: '06045' }) }} value="test">Pulsante seguente</button>
        { props.prelogin.codiceGruppo && (
          <p>
            Banca: { props.prelogin.codiceGruppo }
          </p>
        ) }
      </header>
    </div>
  );
}

export default App;
