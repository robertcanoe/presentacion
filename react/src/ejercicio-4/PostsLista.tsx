import './PostsLista.css';
import { Link } from 'react-router-dom';
import { useFetch } from './useFetch';

// Ejercicio 4 — PostsLista: usa el custom hook useFetch para cargar posts
// Practica: custom hooks, Link para navegación SPA

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsLista() {
  // Reutilizamos el custom hook: le pasamos la URL y nos devuelve estado listo
  const { data: posts, loading, error } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  return (
    <div className="posts-lista">
      <h2>📝 Ejercicio 4: Custom Hook useFetch</h2>
      <p className="hint">Custom hook · useFetch · React Router · Link</p>

      {loading && <p className="cargando">Cargando posts…</p>}
      {error   && <p className="error">❌ {error}</p>}

      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post.id} className="card">
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 80)}…</p>
              {/* Link hace navegación SPA (sin recargar) igual que routerLink en Angular */}
              <Link to={`/ejercicio-4/post/${post.id}`} className="leer-mas">Leer más →</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
