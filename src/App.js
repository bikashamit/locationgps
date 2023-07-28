import React, { useState } from 'react';
import GoogleMap from './GoogleMap'
function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lon);
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <h1>GPS App</h1>
      <button onClick={handleGetLocation}>Get GPS Location</button>
      {latitude !== null && longitude !== null && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
      <div>
      <h1>your location in map</h1>
      {latitude !== null && longitude !== null && (
      <GoogleMap latitude={latitude} longitude={longitude} />
      )}
    </div>
    </div>
  );
}

export default App;
