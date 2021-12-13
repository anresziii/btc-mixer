import React from "react";
import "../../../css/style.css";

export default function MixMobile() {
  return (
    <div className="mix-coins-m">
      <div className="mix-total-m">
        <div>
          <span className="total">TOTAL:</span>
          <span className="amount">3.4209 BTC</span>
        </div>
      </div>
      <div className="mix-block-m">
        <button className="mix-button-m">MIX_COINS</button>
      </div>
    </div>
  );
}
