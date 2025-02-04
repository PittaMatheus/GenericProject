import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api';
import './styles.css';
import back from '../../assets/back.svg';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  // função , array de dependencias
  useEffect(() => {
    // executa sempre que o array sofre mudança
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });
      setSpots(response.data)
    }
    loadSpots();

  }, [])
  return (
    <>
      <Link to="/">
        <button className="btnback"> <img src={back} alt="select img"></img></button>
      </Link>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn"> Cadastrar novo Spot</button>
      </Link>
    </>
  )
}