declare module 'leaflet' {
  export type LatLngTuple = [number, number];
  export type LatLngExpression = LatLngTuple | { lat: number; lng: number };
  export type LatLngBoundsExpression = [LatLngExpression, LatLngExpression] | LatLngExpression[];

  export interface FitBoundsOptions {
    padding?: [number, number];
    maxZoom?: number;
  }

  export interface ZoomPanOptions {
    animate?: boolean;
    duration?: number;
  }

  export interface MapOptions {
    center?: LatLngExpression;
    zoom?: number;
    scrollWheelZoom?: boolean | 'center';
    zoomControl?: boolean;
    attributionControl?: boolean;
    [key: string]: unknown;
  }

  export interface LayerOptions {
    pane?: string;
    attribution?: string;
    [key: string]: unknown;
  }

  export interface InteractiveLayerOptions extends LayerOptions {
    interactive?: boolean;
  }

  export interface PathOptions extends InteractiveLayerOptions {
    stroke?: boolean;
    color?: string;
    weight?: number;
    opacity?: number;
    fill?: boolean;
    fillColor?: string;
    fillOpacity?: number;
  }

  export interface GridLayerOptions extends LayerOptions {}
  export interface TileLayerOptions extends GridLayerOptions {
    attribution?: string;
    opacity?: number;
  }
  export interface WMSOptions extends TileLayerOptions {}
  export type WMSParams = Record<string, string | number | boolean>;

  export interface IconOptions {
    iconSize?: [number, number];
    iconAnchor?: [number, number];
    popupAnchor?: [number, number];
    className?: string;
    html?: string;
  }

  export class DivIcon {
    constructor(options?: IconOptions);
  }

  export interface MarkerOptions extends InteractiveLayerOptions {
    icon?: DivIcon;
  }

  export interface PopupOptions extends LayerOptions {}
  export interface TooltipOptions extends LayerOptions {}
  export interface ImageOverlayOptions extends InteractiveLayerOptions {
    opacity?: number;
  }
  export interface VideoOverlayOptions extends ImageOverlayOptions {}
  export interface CircleMarkerOptions extends PathOptions {
    radius?: number;
  }
  export interface CircleOptions extends CircleMarkerOptions {}
  export interface PolylineOptions extends PathOptions {
    smoothFactor?: number;
  }
  export interface GeoJSONOptions extends InteractiveLayerOptions {}
  export interface ControlOptions {
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  }

  export interface LeafletEventHandlerFnMap {
    [key: string]: (...args: unknown[]) => void;
  }

  export class Evented {
    on(type: string, fn: (...args: unknown[]) => void): this;
    off(type: string, fn?: (...args: unknown[]) => void): this;
  }

  export class Layer extends Evented {
    addTo(map: Map): this;
    remove(): this;
  }

  export class LayerGroup extends Layer {
    addLayer(layer: Layer): this;
    removeLayer(layer: Layer): this;
  }

  export class FeatureGroup extends LayerGroup {}
  export class GridLayer extends Layer {}
  export class TileLayer extends GridLayer {}

  export class Map extends Evented {
    flyTo(latlng: LatLngExpression, zoom?: number, options?: ZoomPanOptions): this;
    setView(latlng: LatLngExpression, zoom?: number, options?: ZoomPanOptions): this;
    fitBounds(bounds: LatLngBoundsExpression, options?: FitBoundsOptions): this;
  }

  export class Marker<T = unknown> extends Layer {
    constructor(latlng: LatLngExpression, options?: MarkerOptions);
  }

  export class Path extends Layer {}
  export class CircleMarker extends Path {}
  export class Circle extends CircleMarker {}
  export class Polyline extends Path {}
  export class Polygon extends Polyline {}
  export class Rectangle extends Polygon {}
  export class GeoJSON extends Layer {}
  export class ImageOverlay extends Layer {}
  export class SVGOverlay extends ImageOverlay {}
  export class VideoOverlay extends ImageOverlay {}
  export class Popup extends Layer {}
  export class Tooltip extends Layer {}

  export class Control {
    addTo(map: Map): this;
    remove(): this;
  }

  export namespace Control {
    export interface AttributionOptions extends ControlOptions {
      prefix?: string | false;
    }
    export interface LayersOptions extends ControlOptions {
      collapsed?: boolean;
    }
    export interface ScaleOptions extends ControlOptions {
      maxWidth?: number;
      metric?: boolean;
      imperial?: boolean;
    }
    export interface ZoomOptions extends ControlOptions {
      zoomInText?: string;
      zoomOutText?: string;
    }
    export class Attribution extends Control {}
    export class Layers extends Control {}
    export class Scale extends Control {}
    export class Zoom extends Control {}
  }
}
