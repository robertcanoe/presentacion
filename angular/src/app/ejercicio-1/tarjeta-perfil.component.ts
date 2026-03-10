import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-perfil',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="tarjeta">
      <!-- Property binding: [src] y [alt] reciben variables del componente -->
      <img [src]="avatarUrl" [alt]="nombre" class="avatar">

      <!-- Interpolación: {{ }} inserta el valor directamente en el HTML -->
      <h2>{{ nombre }}</h2>
      <p>{{ edad }} años · {{ profesion }}</p>

      <!-- [class.online] aplica el CSS "online" si la condición es true -->
      <p class="estado" [class.online]="online" [class.offline]="!online">
        {{ online ? '🟢 Online' : '⚫ Offline' }}
      </p>

      <!-- Event binding: (click) llama al método del componente -->
      <button (click)="toggleEstado()">
        Cambiar a {{ online ? 'Offline' : 'Online' }}
      </button>

      <!-- Two-way binding: el input actualiza "nombre" y viceversa en tiempo real -->
      <label>Editar nombre:</label>
      <input [(ngModel)]="nombre" placeholder="Escribe un nombre...">
    </div>
  `,
  styles: [`
    .tarjeta {
      padding: 1.5rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      max-width: 300px;
      font-family: Arial, sans-serif;
      background: #f8fafc;
    }
    .avatar { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; }
    h2 { margin: 0.75rem 0 0.25rem; }
    p  { margin: 0.25rem 0; color: #475569; }
    .online  { color: #16a34a; font-weight: 600; }
    .offline { color: #64748b; font-weight: 600; }
    button {
      display: block; margin: 0.75rem 0; padding: 0.5rem 1rem;
      background: #3b82f6; color: white; border: none; border-radius: 6px;
      cursor: pointer;
    }
    button:hover { background: #2563eb; }
    label { font-size: 0.8rem; color: #64748b; }
    input {
      display: block; margin-top: 0.25rem; padding: 0.5rem;
      border: 1px solid #cbd5e1; border-radius: 6px; width: 100%; box-sizing: border-box;
    }
  `]
})
export class TarjetaPerfilComponent {
  nombre    = 'Roberto Cano';
  edad      = 30;
  profesion = 'Desarrollador Angular';
  avatarUrl = 'https://i.pravatar.cc/80?img=3';
  online    = true;

  toggleEstado() {
    this.online = !this.online;
  }
}
