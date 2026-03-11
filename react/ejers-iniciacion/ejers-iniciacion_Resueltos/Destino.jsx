'use client';
import { useState } from 'react';
import ImagenCiudad from './ImagenCiudad';

const Destino = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('madrid');

  const ciudades = [
    { valor: 'madrid', nombre: 'Madrid' },
    { valor: 'barcelona', nombre: 'Barcelona' },
    { valor: 'valencia', nombre: 'Valencia' }
  ];

  return (
    <div>
      <h3>Destino</h3>
      <select value={ciudadSeleccionada} onChange={(e) => setCiudadSeleccionada(e.target.value)}>
        {ciudades.map(({ valor, nombre }) => (
          <option key={valor} value={valor}>{nombre}</option>
        ))}
      </select>
      <ImagenCiudad ciudad={ciudadSeleccionada} />
    </div>
  );
};

export default Destino;
