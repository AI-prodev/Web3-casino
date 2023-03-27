import "../styles/globals.css";
import { Sidebar } from "../components";
import { Navbar } from "../components/Navbar";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../context";

const App = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <StateContextProvider>
        <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
          <div className="sm:flex hidden mr-10 relative">
            <Sidebar />
          </div>

          <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </StateContextProvider>
    </ThirdwebProvider>
  );
};

export default App;
