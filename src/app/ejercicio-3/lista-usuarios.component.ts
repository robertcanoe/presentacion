import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: 'admin' | 'editor' | 'viewer';
}

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [TitleCasePipe],
  template: `
    <div class="lista-usuarios">
      <h2>👥 Lista de Usuarios</h2>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <!--
            track usuario.id → Angular reutiliza nodos del DOM en lugar de
            recrearlos, lo que mejora el rendimiento al actualizar la lista.
          -->
          @for (usuario of usuarios; track usuario.id) {
            <tr>
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombre | titlecase }}</td>
              <td>{{ usuario.email }}</td>
              <td>
                <!--
                  @if / @else if / @else: renderizado condicional.
                  Cada rol muestra un badge de distinto color.
                -->
                @if (usuario.rol === 'admin') {
                  <span class="badge admin">Admin</span>
                } @else if (usuario.rol === 'editor') {
                  <span class="badge editor">Editor</span>
                } @else {
                  <span class="badge viewer">Viewer</span>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .lista-usuarios { padding: 1.5rem; max-width: 600px; font-family: Arial, sans-serif; }
    h2 { margin: 0 0 1rem; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.6rem 0.75rem; border-bottom: 1px solid #e2e8f0; }
    th { background: #f8fafc; font-weight: 600; color: #475569; font-size: 0.85rem; }
    tr:hover td { background: #f1f5f9; }
    .badge {
      display: inline-block; padding: 0.2rem 0.6rem;
      border-radius: 9999px; font-size: 0.78rem; font-weight: 600;
    }
    .admin  { background: #fee2e2; color: #991b1b; }
    .editor { background: #fef9c3; color: #854d0e; }
    .viewer { background: #dcfce7; color: #166534; }
  `]
})
export class ListaUsuariosComponent {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Ana García',    email: 'ana@ejemplo.com',    rol: 'admin'  },
    { id: 2, nombre: 'Carlos López',  email: 'carlos@ejemplo.com', rol: 'editor' },
    { id: 3, nombre: 'María Martín',  email: 'maria@ejemplo.com',  rol: 'viewer' },
    { id: 4, nombre: 'Juan Sánchez',  email: 'juan@ejemplo.com',   rol: 'editor' },
    { id: 5, nombre: 'Laura Ruiz',    email: 'laura@ejemplo.com',  rol: 'viewer' },
  ];
}
