import { GlobalStyles } from '../../styles/GlobalStyles';
import Layout from '../components/Layout/Layout';
import CustomThemeProvider from '../ThemeProviders/CustomThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
      useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

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
