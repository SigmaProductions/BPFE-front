import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GridAlgorithm, KmeansAlgorithm, MarkerClusterer } from '@googlemaps/markerclusterer';
import styled from 'styled-components';

const MapContainer = styled.div`
    width: 100rem;
    height: 100rem;
`;

export default function Map({ setShowOffcanvas, setSelectedHouse, houses }) {
    useEffect(() => {
        const loader = new Loader({
            apiKey: 'AIzaSyCtweEmcQ3a1G0avP5V1-2DL-nraQt2oxQ',
            version: 'weekly',
        });

        loader.load().then(async () => {
            let geocoder = new google.maps.Geocoder();

            let map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 51.75, lng: 19.45 },
                zoom: 12,
            });

            const image = {
                url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                // This marker is 20 pixels wide by 32 pixels high.
                size: new google.maps.Size(20, 32),
                // The origin for this image is (0, 0).
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (0, 32).
                anchor: new google.maps.Point(0, 32),
            };
            // Shapes define the clickable region of the icon. The type defines an HTML
            // <area> element 'poly' which traces out a polygon as a series of X,Y points.
            // The final coordinate closes the poly by connecting to the first coordinate.
            const shape = {
                coords: [20, 20, 20],
                type: 'circle',
            };
            console.log(houses);

            houses.forEach(async (house) => {
                await sleep(100);
                geocode({ address: house.address }, geocoder)
                    .then((result) => {
                        return {
                            lat: result[0].geometry.location.lat(),
                            lng: result[0].geometry.location.lng(),
                        };
                    })
                    .then((result) => {
                        const marker = new google.maps.Marker({
                            position: result,
                            map: map,
                        });
                        marker.addListener('click', () => {
                            setSelectedHouse(house);
                            setShowOffcanvas(true);
                        });
                    });
            });
        });

        function geocode(request, geocoder) {
            return geocoder
                .geocode(request)
                .then((result) => {
                    const { results } = result;
                    return results;
                })
                .catch((e) => {
                    alert('Geocode was not successful for the following reason: ' + e);
                });
        }

        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
    }, []);

    return (
        <div>
            <MapContainer id="map">sdfdsf</MapContainer>
        </div>
    );
}
