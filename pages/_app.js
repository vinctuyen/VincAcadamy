// import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import createStore from "../store";
import { Provider } from "react-redux";
import "../assets/styles/index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const store = createStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
