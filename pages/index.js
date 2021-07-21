import { useEffect, useState } from "react";
import Head from 'next/head';
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

import Layout from '../components/Layout';

function Index() {
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
            maxBounds: [
                [-77.875588, 38.50705],
                [-76.15381, 39.548764],
            ],
        });
    }, []);

    return (
        <Layout>
            <Head>  
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <h1>test</h1>
            <main>
                <div id="map" style={{ height: 500, width: 1000 }} />
            </main>
        </Layout>
    );
}

export default Index;