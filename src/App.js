import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Main from './pages/Main';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Main />
      </header>
    </div>
  );
}

export default App;
