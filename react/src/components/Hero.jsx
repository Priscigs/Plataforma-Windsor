import React from 'react';
import EdificioRojo from '../assets/EdificioAzul.jpeg';

const Hero = () => {
  return (
    <header
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${EdificioRojo})`,
      }}
    >
      {/* Contenido */}
      {/* <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg text-white max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Bienvenido a Mi Página!</h1>
        <p className="text-lg md:text-xl mb-6">Esto es una portada responsive con React y Tailwind CSS.</p>
        <a
          href="#about"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Descubre Más
        </a>
      </div> */}
    </header>
  );
};

export default Hero;
