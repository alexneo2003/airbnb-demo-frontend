import React from "react";
import GoogleMapReact from "google-map-react";

export default function GoogleMap() {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_API_KEY,
        language: "ru"
      }}
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
  );
}
