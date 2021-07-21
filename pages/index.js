import Head from 'next/head';

import Layout from '../components/Layout';
import Map from '../components/Map';

const Index = () => (
    <Layout>
        <Head>  
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
        <h1>test</h1>
        <main>
            <Map/>
        </main>
    </Layout>
)

export default Index;