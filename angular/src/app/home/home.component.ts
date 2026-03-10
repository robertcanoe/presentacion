import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Ejercicio {
  numero: number;
  titulo: string;
  descripcion: string;
  ruta: string;
  emoji: string;
  conceptos: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <header>
        <h1>🅰️ Ejercicios Angular 20/21</h1>
        <p>Selecciona un ejercicio para verlo en acción.</p>
      </header>

      <ul class="grid">
        @for (ej of ejercicios; track ej.numero) {
          <li class="card">
            <div class="card-header">
              <span class="emoji">{{ ej.emoji }}</span>
              <span class="numero">Ejercicio {{ ej.numero }}</span>
            </div>
            <h2>{{ ej.titulo }}</h2>
            <p>{{ ej.descripcion }}</p>
            <ul class="tags">
              @for (c of ej.conceptos; track c) {
                <li class="tag">{{ c }}</li>
              }
            </ul>
            <a [routerLink]="ej.ruta" class="btn">Ver ejercicio →</a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .home { padding: 2rem; max-width: 900px; margin: 0 auto; font-family: Arial, sans-serif; }
    header { text-align: center; margin-bottom: 2rem; }
    header h1 { font-size: 1.8rem; margin: 0 0 0.5rem; }
    header p  { color: #64748b; }
    .grid {
      list-style: none; padding: 0; margin: 0;
      display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem;
    }
    .card {
      display: flex; flex-direction: column; gap: 0.5rem;
      border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem 1.5rem;
      transition: box-shadow 0.2s;
    }
    .card:hover { box-shadow: 0 6px 18px rgba(0,0,0,.09); }
    .card-header { display: flex; align-items: center; gap: 0.5rem; }
    .emoji  { font-size: 1.5rem; }
    .numero { font-size: 0.8rem; font-weight: 600; color: #94a3b8; text-transform: uppercase; }
    .card h2 { margin: 0; font-size: 1rem; color: #1e293b; }
    .card p  { margin: 0; color: #64748b; font-size: 0.875rem; flex: 1; }
    .tags { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 0.35rem; }
    .tag {
      background: #f1f5f9; color: #475569;
      padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem;
    }
    .btn {
      display: inline-block; margin-top: 0.25rem;
      background: #6366f1; color: white; text-decoration: none;
      padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem;
      text-align: center; transition: background 0.2s;
    }
    .btn:hover { background: #4f46e5; }
  `]
})
export class HomeComponent {
  ejercicios: Ejercicio[] = [
    {
      numero: 1,
      titulo: 'Tarjeta de Perfil',
      descripcion: 'Los 4 tipos de binding: interpolación, propiedad, evento y bidireccional.',
      ruta: '/ejercicio-1',
      emoji: '🪪',
      conceptos: ['Interpolación', 'Property binding', 'Event binding', 'ngModel'],
    },
    {
      numero: 2,
      titulo: 'Carrito con Signals',
      descripcion: 'Gestión de estado reactivo con signal() y derived state con computed().',
      ruta: '/ejercicio-2',
      emoji: '🛒',
      conceptos: ['signal()', 'computed()', '@for', '@empty'],
    },
    {
      numero: 3,
      titulo: 'Lista de Usuarios',
      descripcion: 'Renderizado condicional de badges por rol usando la nueva sintaxis de control.',
      ruta: '/ejercicio-3',
      emoji: '👥',
      conceptos: ['@for + track', '@if/@else if/@else', 'TitleCasePipe'],
    },
    {
      numero: 4,
      titulo: 'Blog con Routing',
      descripcion: 'Navegación entre lista y detalle usando Router, RouterLink y parámetros de ruta.',
      ruta: '/ejercicio-4',
      emoji: '📝',
      conceptos: ['RouterLink', 'ActivatedRoute', 'inject()', 'snapshot.params'],
    },
    {
      numero: 5,
      titulo: 'Pokémon con HttpClient',
      descripcion: 'Peticiones HTTP a la PokéAPI transformadas con RxJS y convertidas en Signals.',
      ruta: '/ejercicio-5',
      emoji: '⚡',
      conceptos: ['HttpClient', 'map()', 'toSignal()', 'Observable'],
    },
  ];
}
