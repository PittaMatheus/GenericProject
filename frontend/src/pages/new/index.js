import React, { useState, useMemo } from 'react'
import api from '../../services/api';

import camera from '../../assets/camera.svg';
import styles from './styles.css';

export default function New({ history }) {
  const [company, setCompany] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail]
  );



  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('techs', techs);
    data.append('price', price);
    data.append('company', company);

    await api.post('/spots', data, {
      headers: { user_id }
    })
    history.push('/dashboard')

  }

  return (
    <form onSubmit={handleSubmit}>
      <label id="thumbnail"
        className={thumbnail ? 'has-thumbnail' : ''}
        style={{ backgroundImage: `url(${preview})` }}>
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="select img"></img>

      </label>
      <label htmlfor="company">Empresa *</label>
      <input
        id="company"
        value={company}
        placeholder="sua empresa incrivel"
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlfor="techs">TECNOLOGIAS * <span>(separadas por virgula)</span></label>
      <input
        id="techs"
        value={techs}
        placeholder="Quais tecnologias usam?"
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlfor="price">VALOR DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input
        id="price"
        value={price}
        placeholder="Quais tecnologias usam?"
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>

    </form>
  )
}