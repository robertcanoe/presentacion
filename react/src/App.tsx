import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="app-nav">
        <NavLink to="/" end className="logo">
          ⚛️ Ejercicios React 19
        </NavLink>
        <div className="links">
          {(['1', '2', '3', '4'] as const).map((n, i) => {
            const labels = ['Contador', 'Tareas', 'Pokémon', 'Posts'];
            return (
              <NavLink
                key={n}
                to={`/ejercicio-${n}`}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {n} · {labels[i]}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
