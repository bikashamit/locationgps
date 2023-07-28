import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const GoogleMap = (props) => {
  const { google, latitude, longitude } = props;

  return (
    <Map google={google} zoom={14} initialCenter={{ lat: latitude, lng: longitude }}>
      <Marker position={{ lat: latitude, lng: longitude }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbChqbJempQ4iskWL3LYSK-DRlFFB0DlQ', // Replace with your actual API key
})(GoogleMap);
