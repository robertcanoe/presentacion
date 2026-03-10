import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="carrito">
      <h2>🛒 Carrito de Compras</h2>

      <!-- computed() se recalcula automáticamente cuando cambia "productos" -->
      <div class="resumen">
        <span>{{ productos().length }} producto(s)</span>
        <strong>Total: {{ total() }}€</strong>
      </div>

      <div class="formulario">
        <input [(ngModel)]="nuevoNombre"  placeholder="Nombre del producto">
        <input [(ngModel)]="nuevoPrecio"  type="number" min="0" placeholder="Precio (€)">
        <button (click)="agregar()">＋ Agregar</button>
      </div>

      <!-- @for itera la signal. @empty se muestra si la lista está vacía -->
      <ul class="lista">
        @for (producto of productos(); track producto.id) {
          <li class="item">
            <span class="nombre">{{ producto.nombre }}</span>
            <span class="precio">{{ producto.precio }}€</span>
            <button class="btn-eliminar" (click)="eliminar(producto.id)">✕</button>
          </li>
        } @empty {
          <li class="vacio">El carrito está vacío 🛒</li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .carrito { padding: 1.5rem; max-width: 420px; font-family: Arial, sans-serif; }
    h2 { margin: 0 0 1rem; }
    .resumen {
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.75rem 1rem; background: #f1f5f9; border-radius: 8px; margin-bottom: 1rem;
    }
    .formulario { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
    .formulario input {
      flex: 1; min-width: 0; padding: 0.5rem;
      border: 1px solid #cbd5e1; border-radius: 6px;
    }
    .formulario button {
      padding: 0.5rem 0.75rem; background: #22c55e; color: white;
      border: none; border-radius: 6px; cursor: pointer; white-space: nowrap;
    }
    ul { list-style: none; padding: 0; margin: 0; }
    .item {
      display: flex; align-items: center; gap: 0.5rem;
      padding: 0.6rem 0; border-bottom: 1px solid #e2e8f0;
    }
    .nombre { flex: 1; }
    .precio { font-weight: 600; min-width: 50px; text-align: right; }
    .btn-eliminar {
      background: #ef4444; color: white; border: none;
      border-radius: 4px; cursor: pointer; padding: 0.2rem 0.5rem;
    }
    .vacio { color: #94a3b8; text-align: center; padding: 1.5rem 0; }
  `]
})
export class CarritoComponent {
  productos = signal<Producto[]>([
    { id: 1, nombre: 'Laptop',  precio: 999 },
    { id: 2, nombre: 'Mouse',   precio:  29 },
    { id: 3, nombre: 'Teclado', precio:  59 },
  ]);

  // computed() deriva su valor de la signal y se actualiza solo
  total = computed(() =>
    this.productos().reduce((suma, p) => suma + p.precio, 0)
  );

  nuevoNombre = '';
  nuevoPrecio = 0;

  agregar() {
    if (!this.nuevoNombre.trim() || this.nuevoPrecio <= 0) return;
    this.productos.update(lista => [
      ...lista,
      { id: Date.now(), nombre: this.nuevoNombre.trim(), precio: Number(this.nuevoPrecio) }
    ]);
    this.nuevoNombre = '';
    this.nuevoPrecio = 0;
  }

  eliminar(id: number) {
    this.productos.update(lista => lista.filter(p => p.id !== id));
  }
}
