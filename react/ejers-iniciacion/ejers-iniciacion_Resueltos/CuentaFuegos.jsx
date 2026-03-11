'use client';
import { useState } from 'react';

const CuentaFuegos = () => {
  const [fuegos, setFuegos] = useState(0);

  return (
    <div>
      <h3>CuentaFuegos</h3>
      <button onClick={() => setFuegos(fuegos + 1)}>Añadir fuego 🔥</button>
      <p>Número de fuegos: {fuegos}</p>
      <div>
        {Array.from({ length: fuegos }, (_, index) => (
          <span key={index}>🔥</span>
        ))}
      </div>
    </div>
  );
};

export default CuentaFuegos;
