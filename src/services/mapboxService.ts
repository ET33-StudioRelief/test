import type { MapboxOptions } from 'mapbox-gl';
import mapboxgl, { Map } from 'mapbox-gl';

export class MapboxService {
  private readonly accessToken: string;
  private map: Map | null = null;

  constructor() {
    const token = process.env.VITE_MAPBOX_ACCESS_TOKEN;
    if (!token) {
      throw new Error("Token Mapbox manquant. Vérifiez vos variables d'environnement.");
    }
    this.accessToken = token;
    mapboxgl.accessToken = this.accessToken;
  }

  initialize(containerId: string, options: Partial<MapboxOptions> = {}) {
    const container = document.getElementById(containerId);

    if (!container) {
      throw new Error(`Container avec l'ID ${containerId} non trouvé`);
    }

    const defaultOptions: MapboxOptions = {
      container,
      style: 'mapbox://styles/e3web/cm2n8sqgb003601pm1apjc464',
      center: [2.3522, 48.8566], // Paris
      zoom: 12,
      ...options,
    };

    this.map = new mapboxgl.Map(defaultOptions);
    return this.map;
  }

  getMap(): Map | null {
    return this.map;
  }
}
