import Head from 'next/head'

function AssuranceApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="description" content="Assurance"/>
                <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default AssuranceApp;