import './PostDetalle.css';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from './useFetch';

// Ejercicio 4 — PostDetalle: lee el parámetro :id de la URL con useParams
// Practica: useParams (equivalente a ActivatedRoute en Angular), reutilizar useFetch

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostDetalle() {
  // useParams captura el parámetro :id definido en la ruta del router
  const { id } = useParams<{ id: string }>();

  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <div className="post-detalle">
      {loading && <p className="cargando">Cargando post…</p>}
      {error   && <p className="error">❌ {error}</p>}

      {post && (
        <article>
          <h2>{post.title}</h2>
          <p className="cuerpo">{post.body}</p>
        </article>
      )}

      <Link to="/ejercicio-4" className="volver">← Volver a la lista</Link>
    </div>
  );
}
