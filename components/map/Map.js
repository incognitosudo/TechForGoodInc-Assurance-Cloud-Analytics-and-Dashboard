import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { initializeMap } from './initializeMap';
import { addDataLayer } from './addDataLayer';
import { AddressToCoordinates } from '../../utilities/AddressToCoordinates';
import { RetrieveFromDatabase } from '../../utilities/RetrieveFromDatabase';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function Map() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();

  const [geojson, setGeojson] = useState(null);
  const [features, setFeatures] = useState([]);

  // This is for when we can make actual requests from the Azure DB
  // const { data, error } = RetrieveFromDatabase();

  // This is temporary, retrieving fixed set of data
  const test = RetrieveFromDatabase();
  const shootingsData = {};

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // This is temporary, retrieving fixed set of data
    const test = RetrieveFromDatabase();

    let tempArray = [];

    for (var key in test) {
      if (test.hasOwnProperty(key)) {
        let address =
          test[key].Address +
          ' ' +
          test[key]['City Or County'] +
          ' ' +
          test[key].State;
        const data = await AddressToCoordinates(address);

        if (data) {
          tempArray.push({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [
                data.features[0].geometry.coordinates[0],
                data.features[0].geometry.coordinates[1],
              ],
            },
            properties: {
              title: key,
              'marker-color': '#3bb2d0',
              'marker-size': 'large',
              'marker-symbol': 'rocket',
            },
          });
        }
      }
    }

    setGeojson({
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: tempArray,
      },
    });
  };

  // mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZ3Vpb29vIiwiYSI6ImNrcmNmeGc1eTUycTMydm10dGFqZmlyaTkifQ.RYQDCD2tHifk0r-ky8DEBw';
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg';

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: 'map',
      // style: "mapbox://styles/mapbox/streets-v11",
      style: 'mapbox://styles/incognitoburito/ckrrwlzpu1ejr17pem4jlev2e',
      center: [-98.35, 39.5],
      zoom: 3.2,
      // pitch: 45,
    });


    map.on('load', function () {
      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        function (error, image) {
          
          if (!error) {
            map.addImage('custom-marker', image);
  
            // map.addSource('points', geojson)
            map.addSource('points', geojson);
            console.log(geojson)
            map.addLayer({
              id: 'points',
              type: 'symbol',
              source: 'points',
              layout: {
                'icon-image': 'custom-marker',
                'text-field': ['get', 'title'],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 1.25],
                'text-anchor': 'top',
              },
            });

            // geojson.data.features.forEach(feature => {

            //   const long = feature.geometry.coordinates[0]
            //   const lat = feature.geometry.coordinates[1]

            //   new mapboxgl.Popup({ closeOnClick: false })
            //   .setLngLat([long, lat])
            //   .setHTML('<h1>Hello World!</h1>')
            //   .addTo(map);

            // })

            const popup = new mapboxgl.Popup({
              closeButton: false,
              cloneOnClick: false
            });

            map.on('mouseenter', 'points', (e) => {

              console.log(e)

              // Change the cursor style as a UI indicator.
              map.getCanvas().style.cursor = 'pointer';
               
              // Copy coordinates array.
              const coordinates = e.features[0].geometry.coordinates.slice();
              // const description = e.features[0].properties.description;
              const description = 'Hello World!'
               
              // Ensure that if the map is zoomed out such that multiple
              // copies of the feature are visible, the popup appears
              // over the copy being pointed to.
              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }
               
              // Populate the popup and set its coordinates
              // based on the feature found.
              popup.setLngLat(coordinates).setHTML(description).addTo(map);
              });
               
              // remove pop up on mouse leave
              map.on('mouseleave', 'points', () => {
              map.getCanvas().style.cursor = '';
              popup.remove();
              });
            
          }

        }
      );
    });

    // initializeMap(mapboxgl, map);
  }, [geojson]);

  return <div id="map" style={{ height: 1000, width: 1200 }} />;
}

export default Map;
