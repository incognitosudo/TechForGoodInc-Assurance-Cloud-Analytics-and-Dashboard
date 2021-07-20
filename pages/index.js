import Layout from '../components/Layout';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import mapboxgl from 'mapbox-gl';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false
});

// mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZ3Vpb29vIiwiYSI6ImNrcmNmeGc1eTUycTMydm10dGFqZmlyaTkifQ.RYQDCD2tHifk0r-ky8DEBw'
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-74.5, 40],
//     zoom: 9
// });

const Index = () => (
    <Layout>
        <Head>  
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
        <h1>test</h1>
        <DynamicComponentWithNoSSR/>
    </Layout>
)

export default Index;