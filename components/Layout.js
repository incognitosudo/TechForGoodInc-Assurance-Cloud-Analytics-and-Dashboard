import Head from 'next/head';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar';

const basic = ({ children }) => (
    <div>
        <Head>
            <title>Assurance</title>
        </Head>
        <header>
            header
        </header>
        <AppBar/>
        
        {children}

        <footer>footer</footer>
    </div>
)

export default basic;