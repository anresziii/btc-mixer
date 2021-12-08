import React from "react";
import "../css/style.css";
export default function Coin() {
  return (
    <div className="params">
      <div className="params-row">
        <div className="params-elem">
          <div className="coins-block">
            <label htmlFor="coins">Coin</label>
            <button className="help-button-coins">?</button>
            <select className="coins-sel option nav-link nav-select" id="coins">
              <option defaultValue="/en/" selected>
                Tokens
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
        <div className="params-elem">
          <div className="address-block">
            <label className="address-title" htmlFor="address">Receiver's address</label>
            <button className="help-button-address">?</button>
            <div id="address" className="Cod">
              <div>
                <span className="address">1NJRRCKQTFJLUQXFYCEMXCTH77M5TAYO</span>
              </div>
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
        <div className="params-elem">
          <div className="anot-address">
            <span>+ . ADD ANOTHER ADDRESS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
