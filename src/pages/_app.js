import { GlobalStyles } from "../../styles/GlobalStyles"
import CustomThemeProvider from "../ThemeProviders/CustomThemeProvider"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles/>
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  </>)
}

export default MyApp
