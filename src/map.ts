import MapboxService from './services/mapboxService';

// Le token sera injecté depuis Webflow
export function initializeMap(containerId: string) {
  try {
    console.log('Initialisation de la carte...');
    console.log('Container:', document.getElementById(containerId));
    const mapboxService = MapboxService.getInstance();
    const map = mapboxService.initialize(containerId);
    console.log('Carte initialisée:', map);
  } catch (error) {
    console.error("Erreur lors de l'initialisation de la carte:", error);
  }
}
