import { useState, useEffect } from 'react';
import './PokemonLista.css';

// Ejercicio 3: Pokémon API
// Practica: useEffect para fetch al montar, loading state, manejo de errores con try/catch

interface PokemonItem {
  name: string;
  url: string;
  id: number;
}

export default function PokemonLista() {
  const [pokemones, setPokemones] = useState<PokemonItem[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);

  // useEffect con [] → se ejecuta solo al montar el componente (como ngOnInit)
  useEffect(() => {
    async function cargar() {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        const data = await res.json();

        // Extraemos el id numérico desde la URL de cada Pokémon
        const conId = data.results.map((item: { name: string; url: string }) => {
          const partes = item.url.split('/').filter(Boolean);
          return { ...item, id: Number(partes[partes.length - 1]) };
        });

        setPokemones(conId);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    cargar();
  }, []);

  return (
    <div className="pokemon-lista">
      <h2>⚡ Ejercicio 3: Pokémon API</h2>
      <p className="hint">useEffect · fetch · loading state · try/catch</p>

      {loading && <p className="cargando">Cargando Pokémon…</p>}
      {error   && <p className="error">❌ {error}</p>}

      {!loading && !error && (
        <ul className="grid">
          {pokemones.map(p => (
            <li key={p.id} className="card">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                alt={p.name}
              />
              <span className="id">#{p.id}</span>
              <span className="nombre">{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
