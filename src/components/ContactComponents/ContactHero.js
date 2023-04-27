"use client"
import { useEffect, useRef, useState } from "react";

// not get api key thats why this is not working
const ContactHero = () => {
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      });
      setMap(map);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.onload = onLoad;
      document.head.appendChild(script);
    } else {
      onLoad();
    }
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
}


export default ContactHero