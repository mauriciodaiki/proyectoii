// Header.js
import React from 'react';
import './styles.css';

function Header() {
  return (
    <header>
      <img src="hausdermusiklogo.jpg" alt="Haus der Musik Logo" class="logo"></img>
      <h1>Academia de Música: Haus der Musik</h1>
      <nav>
        <ul>                  
          <li><a href="#profesores">Profesores</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#contacto">Contacto</a></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
