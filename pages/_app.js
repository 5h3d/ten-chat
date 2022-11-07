import "../styles/globals.css";

//INTERNAL IMPORT
import { TenChatProvider } from "../Context/TenChat";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <TenChatProvider>
      <NavBar />
      <Component {...pageProps} />
    </TenChatProvider>
  </div>
);

export default MyApp;
