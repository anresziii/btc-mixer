import React from "react";
import "../coinsStyle.css";

function Address() {
  return (
    <div>
      <div className="address-block">
        <label className="address-title" htmlFor="address">
          Receiver's address
        </label>
        <div id="address" className="address">
          <div>
            <span>1NJRRCKQTFJLUQXFYCEMXCTH77M5TAYO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
