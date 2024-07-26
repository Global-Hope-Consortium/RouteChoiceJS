import React, { useEffect } from 'react';

const MapComponent = ({ route }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: route.start_location.lat, lng: route.start_location.lng },
      zoom: 14,
    });

    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsRenderer.setDirections(route);
  }, [route]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;