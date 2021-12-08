import React from "react";
import "../css/style.css";

export default function Input() {
  return (
    <div className="score">
      <div className="btc">
        <div className="btc-input">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="score-checkbox"
          />
          <label htmlFor="checkbox">
            AML SCORE <span className="per-score">0 - 25 %</span>
          </label>
        </div>
      </div>
      <div className="help">
        <button className="help-button">?</button>
      </div>
    </div>
  );
}
