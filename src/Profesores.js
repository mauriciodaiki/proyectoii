import React from 'react';
import './styles.css'; // Asegúrate de que el archivo CSS esté en el mismo directorio

function Profesores() {
  return (
    <section id="profesores" className="professors-section">
      <h2>Nuestros Profesores</h2>
      <div className="professors-grid">
        <div className="professor-card">
          <img src="url-to-image" alt="Profesor de guitarra" />
          <h3>Juan Pérez</h3>
          <p>Especialidad: Guitarra Clásica</p>
          <p>Capacidades: Lectura Musical, Armonía Avanzada</p>
        </div>
        
        <div className="professor-card">
          <img src="url-to-image" alt="Profesora de piano" />
          <h3>María García</h3>
          <p>Especialidad: Piano</p>
          <p>Capacidades: Armonía Básica, Improvisación</p>
        </div>
        
        <div className="professor-card">
          <img src="url-to-image" alt="Profesor de violín" />
          <h3>Roberto Martínez</h3>
          <p>Especialidad: Violín</p>
          <p>Capacidades: Lectura Musical, Técnica Avanzada</p>
        </div>
        
        <div className="professor-card">
          <img src="url-to-image" alt="Profesor de canto" />
          <h3>Sofía López</h3>
          <p>Especialidad: Canto</p>
          <p>Capacidades: Respiración, Técnica Vocal</p>
        </div>
      </div>
    </section>
  );
}

export default Profesores;
