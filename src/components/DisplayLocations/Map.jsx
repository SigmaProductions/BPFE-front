import React, { useEffect } from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import styled from 'styled-components';

const MapContainer= styled.div`
    width:100rem;
    height:100rem;
`

export default function Map() {
    useEffect(()=>{
        const loader = new Loader({
          apiKey: "AIzaSyCtweEmcQ3a1G0avP5V1-2DL-nraQt2oxQ",
             version: "weekly"
        });

        loader.load().then(() => {
          let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
        });
    },[]);

    return (
        <div>
            <MapContainer id="map">sdfdsf</MapContainer>
        </div>
      )
}
