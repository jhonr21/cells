import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
@charset "UTF-8";
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.pokemon-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
}

.titulo {
  text-align: center;
}

.pokemon-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.pokemon-card:hover {
  transform: scale(1.05);
}

.pokemon-image {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.titulo-principal {
  text-align: center; /* Alinear el texto al centro */
  margin: 10px 0; /* Margen vertical */
}

/* Media Query para responsividad */
@media (max-width: 600px) {
  .titulo-principal {
    font-size: 2em; /* Tamaño de fuente más pequeño en pantallas pequeñas */
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .titulo-principal {
    font-size: 2.5em; /* Tamaño de fuente para pantallas medianas */
  }
}
@media (min-width: 961px) {
  .titulo-principal {
    font-size: 3em; /* Tamaño de fuente para pantallas grandes */
  }
}
.titulo-secundario {
  text-align: center; /* Alinear el texto al centro */
  margin: 5px 0; /* Margen vertical */
  color: #555; /* Color más tenue para el título secundario */
}

/* Media Query para responsividad */
@media (max-width: 600px) {
  .titulo-secundario {
    font-size: 1.5em; /* Tamaño de fuente más pequeño en pantallas pequeñas */
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .titulo-secundario {
    font-size: 1.8em; /* Tamaño de fuente para pantallas medianas */
  }
}
@media (min-width: 961px) {
  .titulo-secundario {
    font-size: 2.2em; /* Tamaño de fuente para pantallas grandes */
  }
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.pagination span {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

bbva-button-default {
  --bbva-button-default-bg-color: #007bff;
  --bbva-button-default-bg-color-hover: #0056b3;
  --bbva-button-default-bg-color-focus: #004494;
  --bbva-button-default-bg-color-disabled: #ccc;
  --bbva-button-default-text-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}

bbva-button-default[disabled] {
  cursor: not-allowed;
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 600px) {
  .pagination {
    flex-direction: column; /* Apilar los elementos */
    gap: 5px; /* Reducir el espacio entre elementos */
  }
  .pagination span {
    font-size: 14px; /* Reducir el tamaño de fuente */
  }
  bbva-button-default {
    padding: 8px 15px; /* Reducir el tamaño del padding en los botones */
    font-size: 14px; /* Reducir el tamaño de fuente del botón */
    width: 100%; /* Hacer que los botones ocupen todo el ancho */
  }
}
@media (max-width: 600px) {
  .pokemon-container {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .pokemon-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 961px) {
  .pokemon-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
`;
