import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const lng = 85.3478288;
  const lat = 27.6934291;
  const zoom = 14;

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${
        import.meta.env.VITE_MAPLIBRE_KEY
      }`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([85.3478288, 27.6934291])
      .addTo(map.current);

    new maplibregl.Popup()
      .setLngLat([lng, lat])
      .setHTML(
        `<div>
            <h3>NAXA Pvt. Ltd.</h3>
          </div>
        `
      )
      .addTo(map.current);
  }, [lng, lat, zoom]);

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <div>
          <h1 className="text-darkText font-montserrat text-center font-semibold lg:text-4xl">
            Our Location
          </h1>
        </div>
        <div ref={mapContainer} className="w-[80%] h-[60%] md:h-[80%]" />
      </div>
    </div>
  );
}
