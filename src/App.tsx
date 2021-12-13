import React from "react";
import Coins from "./components/coinsBlock/desktop/coins";
import CoinsMobile from "./components/coinsBlock/mobile/coins";
import Header from "./components/header/desktop/header";
import HeaderMobile from "./components/header/mobile/header";
import Score from "./components/scoreBlock/desktop/score";
import Mix from "./components/mixBlock/desktop/mixCoins";
import MixMobile from "./components/mixBlock/mobile/mixCoinsM";
import ServiceFee from "./components/serviceBlock/serviceFee";
import Title from "./components/title/titleSite";
import "./css/style.css";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const size = useWindowSize();
  const resultCompare = size.width < 401;
  return (
    <div>
      {resultCompare ? (
        <div className="App">
          <Header />
          <div className="container-xl">
            <Title />
            <Score />
            <Coins />
            <ServiceFee />
            <Mix />
          </div>
        </div>
      ) : (
        <div className="App">
          <HeaderMobile />
          <div className="container-xl">
            <div className="main">
              <CoinsMobile />
              <ServiceFee />
              <MixMobile />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
