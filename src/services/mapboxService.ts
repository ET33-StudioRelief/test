import mapboxgl from 'mapbox-gl';

interface MapboxConfig {
  apiKey: string;
  defaultCenter: [number, number];
  defaultZoom: number;
}

class MapboxService {
  private static instance: MapboxService;
  private config: MapboxConfig;
  private map: mapboxgl.Map | null = null;

  private constructor() {
    this.validateEnvironment();
    this.config = {
      apiKey: process.env.VITE_MAPBOX_API_KEY || '',
      defaultCenter: [-58.443832, -14.235004],
      defaultZoom: 3,
    };
    mapboxgl.accessToken = this.config.apiKey;
  }

  private validateEnvironment(): void {
    if (!process.env.VITE_MAPBOX_API_KEY) {
      console.error('Mapbox API key is missing');
      return;
    }
  }

  public static getInstance(): MapboxService {
    if (!MapboxService.instance) {
      MapboxService.instance = new MapboxService();
    }
    return MapboxService.instance;
  }

  initialize(containerId: string, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container avec l'ID ${containerId} non trouvé`);
    }

    this.map = new mapboxgl.Map({
      container: containerId,
      style: 'mapbox://styles/e3web/cm2n8sqgb003601pm1apjc464',
      center: this.config.defaultCenter,
      zoom: this.config.defaultZoom,
      ...options,
    });

    return this.map;
  }

  getMap() {
    return this.map;
  }

  public getConfig(): MapboxConfig {
    return this.config;
  }

  public getApiKey(): string {
    return this.config.apiKey;
  }
}

export default MapboxService;
