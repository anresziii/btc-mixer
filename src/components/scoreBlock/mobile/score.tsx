import React from "react";
import "../../../css/style.css";

export default function ScoreMobile() {
  return (
    <div className="score">
      <div className="btc-m">
        <div className="btc-input">
          <div className="checkbox">
            <input type="checkbox" id="checkbox_1" />
            <label htmlFor="checkbox_1">
              <span className="score-title">
                AML SCORE <span className="">0 - 25 %</span>
              </span>
            </label>
          </div>
        </div>
        <div className="help-m">
          <button className="help-button">?</button>
        </div>
      </div>
    </div>
  );
}
