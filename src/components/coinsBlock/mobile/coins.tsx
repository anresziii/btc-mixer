import React from "react";
import "../../../css/style.css";
import "./coinsStyle.css";
import Tokens from "../../customElements/select/selectTokens";
import Address from "./components/address";
import AnotherButton from "./components/anotherButton";

export default function CoinsMobile() {
  return (
    <div className="params">
      <Address />
      <div className="params-row">
        <div className="params-elem">
          <div className="coins-block">
            <label htmlFor="coins">Coin</label>
            <div className="coins-sel option nav-link nav-select" id="coins">
              <Tokens />
            </div>
          </div>
        </div>
        <div className="params-elem">
          <div className="delay-block">
            <div>
              <label htmlFor="delay">Delay</label>
              <button className="help-button-delay">?</button>
            </div>
            <div className="hours-block">
              <select className="option nav-link nav-select" id="delay">
                <option defaultValue="/en/" selected>
                  0 HOURS
                </option>
                <option defaultValue="/ru/">
                  {" "}
                  <img src="./image/coins/eth.png" alt="" />
                </option>
                <option defaultValue="/ru/">
                  {" "}
                  <img src="./image/coins/atm.png" alt="" />
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <AnotherButton />
    </div>
  );
}
