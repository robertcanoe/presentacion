'use client';
import { useState, useEffect } from 'react';

const Reloj = () => {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date();
      setHora(ahora.toLocaleTimeString('es-ES'));
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h3>Reloj</h3>
      <p>{hora}</p>
    </div>
  );
};

export default Reloj;
