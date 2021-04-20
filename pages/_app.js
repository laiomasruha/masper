import "tailwindcss/tailwind.css";
import Layout from './../components/Layout';
import Login from './../pages/Login';

const logado = false;

function MyApp({ Component, pageProps }) {
    return (
        logado
            ? <Layout>
                <Component{...pageProps} />
            </Layout>
            : <Login />
    )
}

export default MyApp