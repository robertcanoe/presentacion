import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Post {
  id: number;
  titulo: string;
  resumen: string;
}

@Component({
  selector: 'app-posts-lista',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="posts-lista">
      <h2>📝 Blog — Lista de Posts</h2>
      <p class="hint">Haz clic en un post para ver el detalle (navegación con Router).</p>

      <ul class="posts">
        @for (post of posts; track post.id) {
          <li class="post-card">
            <h3>{{ post.titulo }}</h3>
            <p>{{ post.resumen }}</p>
            <!--
              routerLink genera un <a> que navega sin recargar la página.
              Los parámetros de ruta se pasan como array: [ruta, param]
            -->
            <a [routerLink]="['/ejercicio-4/post', post.id]" class="leer-mas">
              Leer más →
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .posts-lista { padding: 1.5rem; max-width: 600px; font-family: Arial, sans-serif; }
    h2 { margin: 0 0 0.25rem; }
    .hint { color: #64748b; font-size: 0.875rem; margin-bottom: 1.5rem; }
    .posts { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
    .post-card {
      padding: 1.25rem 1.5rem; border: 1px solid #e2e8f0;
      border-radius: 10px; transition: box-shadow 0.2s;
    }
    .post-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,.08); }
    .post-card h3 { margin: 0 0 0.5rem; color: #1e293b; }
    .post-card p  { margin: 0 0 0.75rem; color: #475569; font-size: 0.9rem; }
    .leer-mas {
      color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.9rem;
    }
    .leer-mas:hover { text-decoration: underline; }
  `]
})
export class PostsListaComponent {
  posts: Post[] = [
    { id: 1, titulo: 'Introducción a Angular',       resumen: 'Descubre qué es Angular y por qué es uno de los frameworks más usados.' },
    { id: 2, titulo: 'Signals: el nuevo estado',     resumen: 'Aprende cómo los Signals simplifican la gestión de estado reactivo.' },
    { id: 3, titulo: 'Routing en aplicaciones SPA',  resumen: 'Navega entre páginas sin recargar gracias al Router de Angular.' },
  ];
}
