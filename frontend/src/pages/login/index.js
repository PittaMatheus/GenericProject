import React, { useState } from 'react'
import api from '../../services/api';


export default function Login({ history }) {

  
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    // wait ajax
    const response = await api.post('/sessions', { email });
    const { _id } = response.data
    localStorage.setItem('user', _id);
    history.push("/dashboard")
  }

  return (
    <>
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
    </>
  )
}