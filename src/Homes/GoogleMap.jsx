import React from "react";
import Map from "google-map-react";

export default function GoogleMap() {
  return <Map defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />;
}
