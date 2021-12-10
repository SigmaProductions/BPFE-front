import { GlobalStyles } from '../../styles/GlobalStyles';
import Layout from '../components/Layout/Layout';
import CustomThemeProvider from '../ThemeProviders/CustomThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <CustomThemeProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CustomThemeProvider>
        </>
    );
}

export default MyApp;
