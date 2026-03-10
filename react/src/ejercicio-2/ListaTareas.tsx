import { useState } from 'react';
import './ListaTareas.css';

// Ejercicio 2: Lista de Tareas
// Practica: useState con arrays, renderizado con .map(), inputs controlados
interface Tarea {
  id: number;
  texto: string;
}

export default function ListaTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, texto: 'Aprender React 19' },
    { id: 2, texto: 'Practicar useState' },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  function agregar() {
    const texto = nuevaTarea.trim();
    if (!texto) return;
    // Actualización inmutable: spread del array anterior + nuevo elemento
    setTareas(prev => [...prev, { id: Date.now(), texto }]);
    setNuevaTarea('');
  }

  function eliminar(id: number) {
    setTareas(prev => prev.filter(t => t.id !== id));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') agregar();
  }

  return (
    <div className="lista-tareas">
      <h2>✅ Ejercicio 2: Lista de Tareas</h2>
      <p className="hint">useState con arrays · .map() · inputs controlados</p>

      <div className="form">
        <input
          value={nuevaTarea}
          onChange={e => setNuevaTarea(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nueva tarea…"
        />
        <button className="btn-add" onClick={agregar}>+ Agregar</button>
      </div>

      <p className="resumen">{tareas.length} tarea(s)</p>

      {/* Renderizado condicional: lista vacía vs. con items */}
      {tareas.length === 0 ? (
        <p className="vacio">No hay tareas pendientes 🎉</p>
      ) : (
        <ul>
          {tareas.map(tarea => (
            <li key={tarea.id} className="item">
              <span>{tarea.texto}</span>
              <button className="btn-del" onClick={() => eliminar(tarea.id)}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
