import Head from 'next/head';
import Button from '@material-ui/core/Button';

const basic = ({ children }) => (
    <div>
        <Head>
            <title>Assurance</title>
        </Head>
        <header>
            header
        </header>
        
        {children}

        <footer>footer</footer>
    </div>
)

export default basic;