import React, { useState } from 'react';
import logo from './assets/logo.svg';
import api from './services/api';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    // wait ajax
    const response = await api.post('/sessions', { email });
    const { _id } = response.data
    localStorage.setItem('user', _id);
  }

  return (
    <div className="container">
      <img className="imgLogo" src={logo} alt="Logo do clube"></img>
      <div className="content">
        <p>
         <strong>Palmeiras</strong> Campeão mundial 51
       </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="digite o email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
