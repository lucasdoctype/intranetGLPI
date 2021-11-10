import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';
import { GoogleMap, useJsApiLoader  ,Marker} from '@react-google-maps/api';
import './Maps.css';

const Maps = () => {
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDSI4pbXpiyHyBhzHz-FHApFvQUqfuQmZM"
});


 return <div className="map">
   <h6>Chamados por Região</h6>
    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%',height:'100%'}}
        center={{
          lat:-22.906847,
          lng:-43.172897
        }}
        zoom={15}

      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>}
 </div>
};




 
export default Maps;