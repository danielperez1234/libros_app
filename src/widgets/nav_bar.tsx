import React from 'react';
import { NavLink } from 'react-router-dom';

function NavApp() {
  return (
    <header className="App-header">
        
    <ul>
      <li>
        <NavLink to="/" className="nav-btn">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/" className="nav-btn">Perfil</NavLink>
      </li>
      <li>
        <NavLink to="/book/create" className="nav-btn">Crear</NavLink>
      </li>
      <li>
        <NavLink to="/" className="nav-btn">Buscar</NavLink>
      </li>
    </ul>
  
</header>
  
    );
}

export default NavApp;
