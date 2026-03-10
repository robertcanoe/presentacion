import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarjetaPerfilComponent } from './ejercicio-1/tarjeta-perfil.component';
import { CarritoComponent } from './ejercicio-2/carrito.component';
import { ListaUsuariosComponent } from './ejercicio-3/lista-usuarios.component';
import { PostsListaComponent } from './ejercicio-4/posts-lista/posts-lista.component';
import { PostDetalleComponent } from './ejercicio-4/post-detalle/post-detalle.component';
import { PokemonListaComponent } from './ejercicio-5/pokemon-lista.component';

export const routes: Routes = [
  { path: '',                    component: HomeComponent },
  { path: 'ejercicio-1',         component: TarjetaPerfilComponent },
  { path: 'ejercicio-2',         component: CarritoComponent },
  { path: 'ejercicio-3',         component: ListaUsuariosComponent },
  { path: 'ejercicio-4',         component: PostsListaComponent },
  { path: 'ejercicio-4/post/:id', component: PostDetalleComponent },
  { path: 'ejercicio-5',         component: PokemonListaComponent },
  { path: '**',                  redirectTo: '' },
];
