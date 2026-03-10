import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/" class="logo">🅰️ Ejercicios Angular</a>
      <div class="links">
        <a routerLink="/ejercicio-1" routerLinkActive="active">1 · Perfil</a>
        <a routerLink="/ejercicio-2" routerLinkActive="active">2 · Carrito</a>
        <a routerLink="/ejercicio-3" routerLinkActive="active">3 · Usuarios</a>
        <a routerLink="/ejercicio-4" routerLinkActive="active">4 · Blog</a>
        <a routerLink="/ejercicio-5" routerLinkActive="active">5 · Pokémon</a>
      </div>
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [`
    nav {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 1.5rem; height: 52px;
      background: #1e293b; color: white;
      position: sticky; top: 0; z-index: 100;
    }
    nav .logo {
      color: white; text-decoration: none;
      font-weight: 700; font-size: 1rem; white-space: nowrap;
    }
    nav .links {
      display: flex; gap: 0.25rem; flex-wrap: wrap;
    }
    nav .links a {
      color: #cbd5e1; text-decoration: none;
      padding: 0.35rem 0.7rem; border-radius: 6px;
      font-size: 0.85rem; transition: background 0.15s;
    }
    nav .links a:hover { background: #334155; color: white; }
    nav .links a.active { background: #6366f1; color: white; }
    main { padding: 1.5rem; }
  `]
})
export class App {}
