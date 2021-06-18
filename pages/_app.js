// import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../store";
import "../assets/styles/index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import saga from "../store/sagas";
import Notification from "../components/share/Notification";
import Loading from "../components/share/Loading"
// init store
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware,
});
sagaMiddleware.run(saga);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Notification />
      <Loading />
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
