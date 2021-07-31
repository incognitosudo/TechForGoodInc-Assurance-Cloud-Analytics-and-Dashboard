import { useEffect, useState } from "react";
import useSWR from "swr";

import fetcher from "../../utilities/fetcher";
import { initializeMap } from "./initializeMap";
import { addDataLayer } from "./addDataLayer";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

function Map() {
    const [pageIsMounted, setPageIsMounted] = useState(false);
    const [Map, setMap] = useState();
    const { data, error } = useSWR("/api/shootings", fetcher);

    if (error) {
        console.error(error);
    }

    // mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZ3Vpb29vIiwiYSI6ImNrcmNmeGc1eTUycTMydm10dGFqZmlyaTkifQ.RYQDCD2tHifk0r-ky8DEBw';
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg';

    useEffect(() => {
        setPageIsMounted(true);

        let map = new mapboxgl.Map({
            container: "map",
            // style: "mapbox://styles/mapbox/streets-v11",
            style: "mapbox://styles/incognitoburito/ckrrwlzpu1ejr17pem4jlev2e",
            center: [-77.02, 38.887],
            zoom: 12.5,
            // pitch: 45,
        });

        initializeMap(mapboxgl, map);
        setMap(map);
    }, []);

    useEffect(() => {
        if (pageIsMounted && data) {
            Map.on("load", function () {
                addDataLayer(Map, data);
            });
        }
    }, [pageIsMounted, setMap, data, Map]);

    return (
        <div id="map" style={{ height: 500, width: 1000 }} />
    );
}

export default Map;