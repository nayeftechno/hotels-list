import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";
import "react-datepicker/dist/react-datepicker.css";
import HotelsContextProvider from "../src/contexts/HotelsContexts";
function MyApp({ Component, pageProps }) {
  return (
    <HotelsContextProvider>
      <div className="container app-container">
        <Component {...pageProps} />
      </div>
    </HotelsContextProvider>
  );
}

export default MyApp;
