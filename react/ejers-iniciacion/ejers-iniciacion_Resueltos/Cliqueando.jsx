'use client';
import { useState } from 'react';

const Cliqueando = () => {
  const [contador, setContador] = useState(0);

  const mensaje = contador === 0 ? 'No has clicado aún' :
                  contador === 1 ? 'Has clicado 1 vez' :
                  `Has clicado ${contador} veces`;
      
  const color = contador === 0 ? 'red' :
                contador === 1 ? 'orange' :
                'green';

  return (
    <div>
      <h3>Cliqueando</h3>
      <div
        style={{ color, border: `2px solid ${color}`, padding: '10px' }}
        onMouseEnter={() => setContador(0)}
      >
        {mensaje}
      </div>
      <button onClick={() => setContador(contador + 1)}>Click</button>
    </div>
  );
};

export default Cliqueando;