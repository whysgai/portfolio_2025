import React from 'react';
import logo from './assets/logo.svg';
import Header from './components/header'
import Portfolio from './components/portfolio'
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
