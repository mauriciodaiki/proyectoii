// Header.js
import React from 'react';
import './styles.css';

function Header() {
  return (
    <header>
      <h1>Haus der Musik</h1>
      <nav>
        <ul>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#precios">Precios</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
