import React from "react";
import "./tarjeta.css"; // Importa los estilos

export default function Tarjeta() {
  return (
    <article class="card">
      <h1>Maria Skłodowska-Curie</h1>

      <div class="card-body">
        <img
          class="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg"
          alt="Retrato de Marie Curie"
          width="84"
          height="84"
        />

        <ul class="details">
          <li><strong>Profesión:</strong> física y química</li>
          <li>
            <strong>Premios:</strong> 4
            (Premio Nobel de Física, Premio Nobel de Química,
            Medalla Davy, Medalla Matteucci)
          </li>
          <li><strong>Descubrió:</strong> polonio (elemento químico)</li>
        </ul>
      </div>
    </article>
  );
}