import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PokemonItem, PokemonRespuesta } from './pokemon.interface';

// Enriquecemos el PokemonItem con el id extraído de la URL
export interface PokemonConId extends PokemonItem {
  id: number;
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  /*
   * inject() inyecta HttpClient sin necesidad de constructor.
   * HttpClient requiere provideHttpClient() en app.config.ts.
   */
  private http = inject(HttpClient);

  getPokemones(): Observable<PokemonConId[]> {
    return this.http
      .get<PokemonRespuesta>('https://pokeapi.co/api/v2/pokemon?limit=20')
      .pipe(
        // map transforma la respuesta antes de que el componente la reciba
        map(respuesta =>
          respuesta.results.map(item => ({
            ...item,
            // La URL tiene la forma .../pokemon/25/ → extraemos el id
            id: this.extraerId(item.url),
          }))
        )
      );
  }

  private extraerId(url: string): number {
    const partes = url.split('/').filter(Boolean);
    return Number(partes[partes.length - 1]);
  }
}
