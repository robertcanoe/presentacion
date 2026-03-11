'use client';
import { useState } from 'react';

const colores = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10'];

const Roberto = () => {
  const [colorActual, setColorActual] = useState('');

  const cambiarColor = () => {
    let nuevoColor;
    do {
      nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    } while (nuevoColor === colorActual);
    setColorActual(nuevoColor);
  };

  return (
    <div onMouseOver={cambiarColor}> 
      <h3>Roberto</h3>
      <div className={`mi-nombre ${colorActual}`}>
        <p>Roberto Cano Estévez</p>
        <p>@robertcanoe</p>
      </div>
    </div>
  );
};

export default Roberto;
