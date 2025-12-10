import React from 'react';
import logo from './assets/logo.svg';
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Portfolio/>
    </div>
  );
}

export default App;
