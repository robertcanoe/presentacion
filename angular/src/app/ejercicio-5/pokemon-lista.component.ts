import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  standalone: true,
  imports: [TitleCasePipe],
  template: `
    <div class="pokemon-lista">
      <h2>⚡ Pokémon — HttpClient + Signals</h2>
      <p class="hint">Datos cargados desde la PokéAPI con HttpClient.</p>

      <!--
        toSignal convierte el Observable del servicio en una Signal.
        Mientras no llegan datos, la Signal vale undefined → mostramos "Cargando…"
      -->
      @if (!pokemones()) {
        <p class="cargando">Cargando Pokémon…</p>
      } @else {
        <ul class="grid">
          @for (p of pokemones(); track p.id) {
            <li class="card">
              <img
                [src]="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png'"
                [alt]="p.name"
              >
              <span class="id">#{{ p.id }}</span>
              <span class="nombre">{{ p.name | titlecase }}</span>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [`
    .pokemon-lista { padding: 1.5rem; max-width: 700px; font-family: Arial, sans-serif; }
    h2 { margin: 0 0 0.25rem; }
    .hint { color: #64748b; font-size: 0.875rem; margin-bottom: 1.5rem; }
    .cargando { color: #94a3b8; }
    .grid {
      list-style: none; padding: 0; margin: 0;
      display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 0.75rem;
    }
    .card {
      display: flex; flex-direction: column; align-items: center;
      padding: 0.75rem 0.5rem; border: 1px solid #e2e8f0; border-radius: 10px;
      cursor: default; transition: box-shadow 0.2s;
    }
    .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,.1); }
    .card img { width: 72px; height: 72px; image-rendering: pixelated; }
    .id   { font-size: 0.75rem; color: #94a3b8; }
    .nombre { font-weight: 600; font-size: 0.85rem; color: #1e293b; text-align: center; }
  `]
})
export class PokemonListaComponent {
  private service = inject(PokemonService);

  /*
   * toSignal suscribe automáticamente al Observable y devuelve una Signal.
   * Cuando llegan los datos, la vista se actualiza sola (sin subscribe ni async pipe).
   */
  pokemones = toSignal(this.service.getPokemones());
}
