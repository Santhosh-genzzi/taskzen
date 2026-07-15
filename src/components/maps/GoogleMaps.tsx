"use client";

import { useEffect, useRef } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

export default function GoogleMaps() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      try {
        setOptions({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
          version: "weekly",
        });

        // Load Maps Library
        const { Map } =
          (await importLibrary("maps")) as google.maps.MapsLibrary;

        // Load Marker Library
        const { AdvancedMarkerElement } =
          (await importLibrary("marker")) as google.maps.MarkerLibrary;

        // Your College Location
        const collegeLocation = {
          lat: 10.876912,
          lng: 76.904812,
        };

        // Create Map
        const map = new Map(mapRef.current, {
          center: collegeLocation,
          zoom: 17,
          mapId: "48d2a3dc54db3a3dbaffc62d", 
        });

        // Marker
        new AdvancedMarkerElement({
          map,
          position: collegeLocation,
          title: "Sri Venkateswara College, Ettimadai",
        });

        // Info Window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding:10px">
              <h3>Sri Venkateswara College</h3>
              <p>Ettimadai, Coimbatore</p>
              <p></p>
              <p>+91 9876543210</p>
            </div>
          `,
        });

        const marker = new AdvancedMarkerElement({
          map,
          position: collegeLocation,
        });

        marker.addListener("click", () => {
          infoWindow.open({
            anchor: marker,
            map,
          });
        });
      } catch (error) {
        console.error(error);
      }
    };

    initMap();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-80 h-50 rounded-xl shadow-lg"
    />
  );
}