import React from 'react'
import {
    GoogleMap,
    useLoadScript } 
    from '@react-google-maps/api';
    // import { formatRelative } from "date-fns";
import styles from '../../mapStyles'
    

function DetailContainer() {
    const libraries = ["places"];
    const mapContainerStyle = {
        width: "50vw",
        height: "50vh",
    };
    const center = {
        lat: 41.8781,
        lng: -87.6298,
        };  
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, libraries,
    });
    const options = {
        // styles: {styles},
        disableDefaultUI: true,
    }
   
       
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

  return (
    <div className="map">
        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={options}
            >
        </GoogleMap>
    </div>
  )
}

export default DetailContainer;