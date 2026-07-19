"use client";

import { useEffect, useRef } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

export default function GoogleMaps() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      try {
        // Initialize Google Maps
        setOptions({
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
          v: "weekly",
        });

        const { Map } =
          (await importLibrary("maps")) as google.maps.MapsLibrary;

        const collegeLocation = {
          lat: 10.876912,
          lng: 76.904812,
        };

        const map = new Map(mapRef.current, {
          center: collegeLocation,
          zoom: 16,
        });

        const marker = new google.maps.Marker({
          position: collegeLocation,
          map,
          title: "Sri Venkateswara College",
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding:10px">
              <h2 style="font-size:18px;font-weight:bold">
                Sri Venkateswara College
              </h2>

              <p>Ettimadai, Coimbatore</p>

              <p>📞 +91 9876543210</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      } catch (err) {
        console.error("Google Maps Error:", err);
      }
    };

    initMap();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-50 rounded-xl overflow-hidden shadow-lg"
    />
  );
}