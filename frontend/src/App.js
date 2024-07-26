import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RouteDetails from './components/RouteDetails';

const App = () => {
  const [routeType, setRouteType] = useState('fastest');
  const [route, setRoute] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  }, []);

  const fetchRoute = async () => {
    try {
      const response = await axios.post('/api/route', { routeType, currentLocation });
      setRoute(response.data);
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  useEffect(() => {
    if (currentLocation.lat && currentLocation.lon) {
      fetchRoute();
    }
  }, [routeType, currentLocation]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Route Choice Feature</h1>
        <div>
          <label>
            <input type="radio" value="fastest" checked={routeType === 'fastest'} onChange={() => setRouteType('fastest')} />
            Fastest (Cruise, Comfort, Safe)
          </label>
          <label>
            <input type="radio" value="shortest" checked={routeType === 'shortest'} onChange={() => setRouteType('shortest')} />
            Shortest (Economy, Saver, Unsafe)
          </label>
          <label>
            <input type="radio" value="custom" checked={routeType === 'custom'} onChange={() => setRouteType('custom')} />
            Custom
          </label>
        </div>
        {route && <RouteDetails route={route} />}
      </header>
    </div>
  );
};

export default App;