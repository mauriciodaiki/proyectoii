import React from 'react';
import './styles.css'; // Asegúrate de que el archivo CSS esté en el mismo directorio

function Contacto() {
  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <a href="https://wa.me/1234567890?text=Hola, estoy interesado en más información sobre sus cursos." className="btn-whatsapp">
        <img className='logo' src="whatsapp-icon.png" alt="WhatsApp" /> Contáctanos por WhatsApp
      </a>
    </section>
  );
}

export default Contacto;