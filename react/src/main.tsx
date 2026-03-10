import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Home from './home/Home.tsx';
import ContadorMejorado from './ejercicio-1/ContadorMejorado.tsx';
import ListaTareas from './ejercicio-2/ListaTareas.tsx';
import PokemonLista from './ejercicio-3/PokemonLista.tsx';
import PostsLista from './ejercicio-4/PostsLista.tsx';
import PostDetalle from './ejercicio-4/PostDetalle.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'ejercicio-1', element: <ContadorMejorado /> },
      { path: 'ejercicio-2', element: <ListaTareas /> },
      { path: 'ejercicio-3', element: <PokemonLista /> },
      { path: 'ejercicio-4', element: <PostsLista /> },
      { path: 'ejercicio-4/post/:id', element: <PostDetalle /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
