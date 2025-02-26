import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/map.css';

import { initializeMap } from './map';

// Initialisation automatique de la carte
document.addEventListener('DOMContentLoaded', () => {
  initializeMap('map-container');
});
