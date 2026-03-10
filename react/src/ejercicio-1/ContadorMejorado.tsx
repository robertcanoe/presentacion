import { useState } from 'react';
import './ContadorMejorado.css';

// Ejercicio 1: Contador Mejorado
// Practica: useState, event handlers, renderizado condicional
export default function ContadorMejorado() {
  const [contador, setContador] = useState(0);
  const estadoClase = contador > 0 ? 'positivo' : contador < 0 ? 'negativo' : 'cero';

  return (
    <div className="contador-card">
      <h2>🔢 Ejercicio 1: Contador Mejorado</h2>
      <p className="contador-hint">useState · event handlers · renderizado condicional</p>

      <div className="contador-display">{contador}</div>

      <div className="contador-botones">
        <button className="btn-incrementar" onClick={() => setContador(c => c + 1)}>+1</button>
        <button className="btn-decrementar" onClick={() => setContador(c => c - 1)}>-1</button>
        <button className="btn-reset" onClick={() => setContador(0)}>Reset</button>
      </div>

      {/* Renderizado condicional con operador ternario */}
      <p className={`contador-estado ${estadoClase}`}>
        {contador > 0 ? '¡Número positivo! 🟢' : contador < 0 ? '¡Número negativo! 🔴' : 'En cero ⚪'}
      </p>
    </div>
  );
}
