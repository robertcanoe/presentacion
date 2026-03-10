// Respuesta de la API https://pokeapi.co/api/v2/pokemon?limit=20
export interface PokemonRespuesta {
  count:    number;
  results:  PokemonItem[];
}

export interface PokemonItem {
  name: string;
  url:  string; // contiene el id al final: .../pokemon/25/
}

// Información detallada de un Pokémon (solo los campos que usamos)
export interface Pokemon {
  id:      number;
  name:    string;
  sprites: { front_default: string };
  types:   { type: { name: string } }[];
}
