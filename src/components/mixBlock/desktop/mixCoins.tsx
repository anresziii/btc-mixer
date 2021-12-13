import React from "react";
import "../../../css/style.css";

export default function Mix() {
  return (
    <div className="mix-coins">
      <div className="mix-block">
        <button className="mix-button">MIX_COINS</button>
      </div>
      <div className="mix-total">
        <div>
          <span className="total">TOTAL:</span> <span className="amount">3.4209 BTC</span>
        </div>
      </div>
    </div>
  );
}
