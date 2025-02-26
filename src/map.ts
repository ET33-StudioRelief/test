import { MapboxService } from './services/mapboxService';

const mapboxService = new MapboxService();

// Le token sera injecté depuis Webflow
export function initializeMap(containerId: string) {
  try {
    mapboxService.initialize(containerId);
  } catch (error) {
    console.error("Erreur lors de l'initialisation de la carte:", error);
  }
}
