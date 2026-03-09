import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Post {
  id: number;
  titulo: string;
  contenido: string;
}

const POSTS: Post[] = [
  { id: 1, titulo: 'Introducción a Angular',      contenido: 'Angular es un framework mantenido por Google que usa TypeScript. Ofrece un sistema de componentes, un potente sistema de plantillas reactivas y herramientas integradas como el Router y HttpClient.' },
  { id: 2, titulo: 'Signals: el nuevo estado',    contenido: 'Los Signals son primitivas reactivas que notifican a Angular exactamente qué parte de la vista debe actualizarse. Con signal(), computed() y effect() puedes gestionar el estado de forma simple y eficiente.' },
  { id: 3, titulo: 'Routing en aplicaciones SPA', contenido: 'El Router de Angular permite definir rutas con parámetros (:id), rutas anidadas y carga diferida (lazy loading). RouterLink genera anclas que cambian la URL sin recargar la página.' },
];

@Component({
  selector: 'app-post-detalle',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="post-detalle">
      @if (post()) {
        <article>
          <h2>{{ post()!.titulo }}</h2>
          <p class="contenido">{{ post()!.contenido }}</p>
        </article>
      } @else {
        <p class="no-encontrado">Post no encontrado.</p>
      }

      <!-- routerLink sin parámetros → navega a la ruta padre -->
      <a routerLink="/ejercicio-4" class="volver">← Volver a la lista</a>
    </div>
  `,
  styles: [`
    .post-detalle { padding: 1.5rem; max-width: 600px; font-family: Arial, sans-serif; }
    article { border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem; margin-bottom: 1rem; }
    h2 { margin: 0 0 1rem; color: #1e293b; }
    .contenido { color: #475569; line-height: 1.7; }
    .no-encontrado { color: #ef4444; }
    .volver { color: #6366f1; text-decoration: none; font-weight: 600; }
    .volver:hover { text-decoration: underline; }
  `]
})
export class PostDetalleComponent implements OnInit {
  /*
   * inject() es la alternativa moderna a la inyección por constructor.
   * ActivatedRoute da acceso a la URL activa y sus parámetros.
   */
  private route = inject(ActivatedRoute);

  post = signal<Post | null>(null);

  ngOnInit() {
    // snapshot.params lee el valor del parámetro :id en el momento de cargar
    const id = Number(this.route.snapshot.params['id']);
    this.post.set(POSTS.find(p => p.id === id) ?? null);
  }
}
