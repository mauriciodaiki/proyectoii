import React from 'react';
import './styles.css'; // Asegúrate de que el archivo CSS esté en el mismo directorio

function Precios() {
  return (
    <section id="precios">
      <h2>Nuestros Precios</h2>
      <table className="tabla-precios">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plan Básico</td>
            <td>Acceso a 4 clases por mes</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Plan Intermedio</td>
            <td>Acceso a 8 clases por mes</td>
            <td>$180</td>
          </tr>
          <tr>
            <td>Plan Avanzado</td>
            <td>Acceso ilimitado a clases por mes</td>
            <td>$250</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Precios;