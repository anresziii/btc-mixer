import React from "react";
import "../css/style.css";
export default function Per() {
  return (
    <div className="service">
      <div className="service-row">
        <div className="ser-fee">
          <div className="ser-label">
            <label htmlFor="percent">SERVICE FEE</label>
            <button className="help-service">?</button>
          </div>
          <div className="percent" id="percent">
            <select className="per-select option nav-link nav-select">
              <option disabled>Choose language</option>
              <option defaultValue="/en/" selected>
                1.218%
              </option>
              <option defaultValue="/ru/">
                RUS <img src="./image/flags/RU.png" alt="" />
              </option>
              <option defaultValue="/fr/">
                FR <img src="./image/flags/FR.png" alt="" />
              </option>
              <option defaultValue="/cn/">
                CN <img src="./image/flags/CN.png" alt="" />
              </option>
            </select>
            <div className="each-address">
              <div className="Per">+ 0.007 BTC PER EACH ADDRESS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
