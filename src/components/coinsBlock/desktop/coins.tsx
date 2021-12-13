import React from "react";
import "../../../css/style.css";
import "./coinsStyle.css";
import Tokens from "../../customElements/select/selectTokens";

export default function Coins() {
  return (
    <div className="params">
      <div className="params-row">
        <div className="params-elem-coin">
          <div className="coins-block">
            <label htmlFor="coins">Coin</label>
            <button className="help-button-coins">?</button>
            <div className="coins-sel option nav-link nav-select" id="coins">
              <Tokens />
            </div>
          </div>
        </div>
        <div className="params-elem">
          <div className="address-block">
            <label className="address-title" htmlFor="address">
              Receiver's address
            </label>
            <button className="help-button-address">?</button>
            <div id="address">
              <div className="address-addr">
                <span className="addr">1NJRRCKQTFJLUQXFYCEMXCTH77M5TAYO</span>
              </div>
            </div>
          </div>
        </div>
        <div className="params-elem">
          <div className="delay-block">
            <div>
              <label htmlFor="delay">Delay</label>
              {/* <div className="hint">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div> */}
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
        <div className="params-elem">
          <div className="anot-address">
            <span>
              <button className="help-add-address">+</button> . ADD ANOTHER
              ADDRESS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
