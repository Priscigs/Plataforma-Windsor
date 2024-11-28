import React from 'react';
import LogoRojo from '../assets/LogoAzul.jpeg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Contenedor del logo */}
        <div className="logo-container">
          <img src={LogoRojo} alt="Logo" className="logo" />
          <h1 className="text-2xl font-bold">Windsor Academy</h1>
        </div>

        {/* Menú en la derecha */}
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca</a></li>
          <li><a href="#courses">Cursos</a></li>
          <li><a href="#reclutment">Reclutamiento</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
