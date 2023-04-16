import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
// import "../styles/css/royel_preloder.css";
import "../styles/serves.css";
// import "../styles/mainServices.css"
import "../styles/css/libraries.css";
import "../styles/css/style.css";
// import "../../src/assets/service/css/slick.css"
import "../styles/globals.css";
import "./../styles/index.css";
import "./../styles/scss/style.scss";
import MainLayout from "@/Layout/MainLayout";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
