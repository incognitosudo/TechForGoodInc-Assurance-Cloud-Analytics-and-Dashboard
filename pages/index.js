import Head from 'next/head';

import Layout from '../components/Layout';
import Map from '../components/map/Map';
import GetCoordinates from '../components/GetCoordinates'

const Index = () => (
    <Layout>
        <Head>  
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
        <h1>School Shootings Data</h1>
        <main>
            <GetCoordinates/>
            <Map/>
        </main>
    </Layout>
)

export default Index;