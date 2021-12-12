import React from 'react';
import { useEffect } from 'react';
import Map from '../components/DisplayLocations/Map';



export default function AboutUs() {
  return <div>
    <Map places={[{address: 'Łódź Piotrkowska 21'}, {address: 'Łódź Piotrkowska 120'}, {address: 'Łódź Piotrkowska 60'}, {address: 'Łódź Bolesława Limanowskiego 95'}, {address: 'Łódź Bolesława Limanowskiego 10'}, {address: 'Łódź Bolesława Limanowskiego 15'}, {address: 'Łódź Bolesława Limanowskiego 25'}]} />
  </div>;
}
