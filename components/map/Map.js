import { useEffect, useState } from "react";
import useSWR from "swr";

import fetcher from "../../utilities/fetcher";
import { initializeMap } from "./initializeMap";
import { addDataLayer } from "./addDataLayer";
import { AddressToCoordinates } from "../../utilities/AddressToCoordinates";
import { RetrieveFromDatabase } from "../../utilities/RetrieveFromDatabase";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

function Map() {
    const [pageIsMounted, setPageIsMounted] = useState(false);
    const [Map, setMap] = useState();

    // This is for when we can make actual requests from the Azure DB
    // const { data, error } = RetrieveFromDatabase();

    // This is temporary, retrieving fixed set of data
    const test = RetrieveFromDatabase();
    // const coordinates = {};

    for (var key in test) {
        if (test.hasOwnProperty(key)) {
            // coordinates[key] = AddressToCoordinates(data[key].Address);
            // console.log(AddressToCoordinates(data[key].Address));
            let address = test[key].Address + " " + test[key]['City Or County'] + " " + test[key].State;
            const { data, isLoading, isError } = AddressToCoordinates(address);
            console.log(data.data.features[0].geometry.coordinates)
        }
    }

    // mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZ3Vpb29vIiwiYSI6ImNrcmNmeGc1eTUycTMydm10dGFqZmlyaTkifQ.RYQDCD2tHifk0r-ky8DEBw';
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg';

    useEffect(() => {
        setPageIsMounted(true);

        let map = new mapboxgl.Map({
            container: "map",
            // style: "mapbox://styles/mapbox/streets-v11",
            style: "mapbox://styles/incognitoburito/ckrrwlzpu1ejr17pem4jlev2e",
            center: [-98.35, 39.5],
            zoom: 3.2,
            // pitch: 45,
        });

        // initializeMap(mapboxgl, map);
        setMap(map);
    }, []);

    return (<div id="map" style={{ height: 500, width: 1000 }} />);
}

export default Map;