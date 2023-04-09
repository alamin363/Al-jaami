import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
import "../styles/css/libraries.css";
import "../styles/css/style.css";
import "./../styles/scss/style.scss";
import "../styles/globals.css";
import "./../styles/index.css";
import { useEffect } from "react";
config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}
