import React from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Routes from './routes'
function App() {

  return (
    <div className="container">
      {/* <img className="imgLogo" src={logo} alt="Logo do clube"></img> */}
      <div className="content">
      <Routes />
      </div>
    </div>
  );
}

export default App;
