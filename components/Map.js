import { useEffect, useState } from "react";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

function Map() {
    const [pageIsMounted, setPageIsMounted] = useState(false);

    mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZ3Vpb29vIiwiYSI6ImNrcmNmeGc1eTUycTMydm10dGFqZmlyaTkifQ.RYQDCD2tHifk0r-ky8DEBw';

    useEffect(() => {
        setPageIsMounted(true);

        let map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-77.02, 38.887],
            zoom: 12.5,
            pitch: 45,
            // maxBounds: [
            //     [-77.875588, 38.50705],
            //     [-76.15381, 39.548764],
            // ],
        });

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
            })
        );
    }, []);

    return (
        <div id="map" style={{ height: 500, width: 1000 }} />
    );
}

export default Map;