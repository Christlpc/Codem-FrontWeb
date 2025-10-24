"use client";

import { useEffect, useRef, useState } from "react";
import Map, { Marker, Source, Layer, NavigationControl } from "react-map-gl";
import type { MapRef } from "react-map-gl";
import { MapPin } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";

interface RouteMapProps {
  pickupCoords?: [number, number];
  dropoffCoords?: [number, number];
  onLocationSelect?: (coords: [number, number], type: "pickup" | "dropoff") => void;
}

// Note: Vous devrez remplacer cette clé par votre propre token Mapbox
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.YOUR_MAPBOX_TOKEN_HERE";

export function RouteMap({
  pickupCoords,
  dropoffCoords,
  onLocationSelect,
}: RouteMapProps) {
  const mapRef = useRef<MapRef>(null);
  const [viewState, setViewState] = useState({
    longitude: 2.3522,
    latitude: 48.8566,
    zoom: 12,
  });

  const [routeData, setRouteData] = useState<any>(null);

  // Fetch route when both coordinates are available
  useEffect(() => {
    if (pickupCoords && dropoffCoords) {
      fetchRoute(pickupCoords, dropoffCoords);
      
      // Fit map to show both markers
      const bounds: [[number, number], [number, number]] = [
        [
          Math.min(pickupCoords[0], dropoffCoords[0]),
          Math.min(pickupCoords[1], dropoffCoords[1]),
        ],
        [
          Math.max(pickupCoords[0], dropoffCoords[0]),
          Math.max(pickupCoords[1], dropoffCoords[1]),
        ],
      ];

      mapRef.current?.fitBounds(bounds, {
        padding: 100,
        duration: 1000,
      });
    }
  }, [pickupCoords, dropoffCoords]);

  const fetchRoute = async (start: [number, number], end: [number, number]) => {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;

    setRouteData({
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    });
  };

  const layerStyle = {
    id: "route",
    type: "line" as const,
    layout: {
      "line-join": "round" as const,
      "line-cap": "round" as const,
    },
    paint: {
      "line-color": "#10b981",
      "line-width": 5,
      "line-opacity": 0.8,
    },
  };

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border-2 border-border shadow-lg">
      <Map
        ref={mapRef}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="top-right" />

        {/* Pickup Marker */}
        {pickupCoords && (
          <Marker longitude={pickupCoords[0]} latitude={pickupCoords[1]}>
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-500 rounded-full animate-ping opacity-75" />
              <div className="relative bg-blue-500 p-2 rounded-full shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
          </Marker>
        )}

        {/* Dropoff Marker */}
        {dropoffCoords && (
          <Marker longitude={dropoffCoords[0]} latitude={dropoffCoords[1]}>
            <div className="relative">
              <div className="absolute -inset-2 bg-green-500 rounded-full animate-ping opacity-75" />
              <div className="relative bg-green-500 p-2 rounded-full shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
          </Marker>
        )}

        {/* Route Line */}
        {routeData && (
          <Source id="route" type="geojson" data={routeData}>
            <Layer {...layerStyle} />
          </Source>
        )}
      </Map>
    </div>
  );
}

