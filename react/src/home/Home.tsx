import './Home.css';
import { Link } from 'react-router-dom';

interface EjercicioInfo {
  numero: number;
  titulo: string;
  descripcion: string;
  ruta: string;
  emoji: string;
  conceptos: string[];
}

const ejercicios: EjercicioInfo[] = [
  {
    numero: 1,
    titulo: 'Contador Mejorado',
    descripcion: 'Contador con botones +1, -1 y Reset. Renderizado condicional según el valor.',
    ruta: '/ejercicio-1',
    emoji: '🔢',
    conceptos: ['useState', 'Event handlers', 'Renderizado condicional'],
  },
  {
    numero: 2,
    titulo: 'Lista de Tareas',
    descripcion: 'Gestión de tareas: agregar con input, renderizar con .map() y eliminar.',
    ruta: '/ejercicio-2',
    emoji: '✅',
    conceptos: ['useState con arrays', '.map()', 'Input controlado'],
  },
  {
    numero: 3,
    titulo: 'Pokémon API',
    descripcion: 'Carga datos desde PokeAPI con fetch. Gestiona loading y errores con try/catch.',
    ruta: '/ejercicio-3',
    emoji: '⚡',
    conceptos: ['useEffect', 'fetch / async-await', 'Loading state', 'try/catch'],
  },
  {
    numero: 4,
    titulo: 'Custom Hook useFetch',
    descripcion: 'Custom hook reutilizable para cualquier URL. Navega al detalle con React Router.',
    ruta: '/ejercicio-4',
    emoji: '🪝',
    conceptos: ['Custom hooks', 'useParams', 'React Router', 'Link'],
  },
];

export default function Home() {
  return (
    <div className="home">
      <header>
        <h1>⚛️ Ejercicios React 19</h1>
        <p>Selecciona un ejercicio para verlo en acción.</p>
      </header>

      <ul className="grid">
        {ejercicios.map(ej => (
          <li key={ej.numero} className="card">
            <div className="card-header">
              <span className="emoji">{ej.emoji}</span>
              <span className="numero">Ejercicio {ej.numero}</span>
            </div>
            <h2>{ej.titulo}</h2>
            <p>{ej.descripcion}</p>
            <ul className="tags">
              {ej.conceptos.map(c => (
                <li key={c} className="tag">{c}</li>
              ))}
            </ul>
            <Link to={ej.ruta} className="btn">Ver ejercicio →</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

