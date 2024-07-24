import React from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";

function MapWithMarker() {
  const initialViewport = {
    latitude: 37.774929,
    longitude: -122.419416,
    zoom: 13,
  };

  const marker = {
    latitude: 37.774929,
    longitude: -122.419416,
    icon: "", //icon path
  };

  return (
    <Map
      initialViewport={initialViewport}
      width="100%"
      height="400px"
      //   googleMapsApiKey="YOUR_API_KEY"
    >
      <Marker
        key="marker"
        latitude={marker.latitude}
        longitude={marker.longitude}
        icon={marker.icon}
      />
    </Map>
  );
}

export default MapWithMarker;
