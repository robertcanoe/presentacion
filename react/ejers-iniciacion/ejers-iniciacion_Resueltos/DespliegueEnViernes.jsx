'use client';
import { useState } from 'react';

const DespliegueEnViernes = () => {
  const [texto, setTexto] = useState('');

  const textoLower = texto.toLowerCase();
  const esPeligroso = (textoLower.includes('despliegue') || textoLower.includes('deploy')) && textoLower.includes('viernes');

  return (
    <div>
      <style>{`
        textarea {
          background-color: #ffffff;
          color: #fff;
        }
      `}</style>
      <h3>DespliegueEnViernes</h3>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={5}
        style={{ color: esPeligroso ? 'red' : 'black', width: '100%' }}
      />
      {esPeligroso && (
        <a href="https://youtu.be/Vhmek8362Fc" target="_blank" rel="noopener noreferrer">
           NO DESPLIEGUES EN VIERNES 
        </a>
      )}
    </div>
  );
};

export default DespliegueEnViernes;
