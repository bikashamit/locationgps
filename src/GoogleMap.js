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
  apiKey: 'AIzaSyCerUCTYhn2CEPO9LO8G0o7d-7QtONnzSI', // Replace with your actual API key
})(GoogleMap);
