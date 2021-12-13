import React, { useState } from "react";
import "../../../css/style.css";
import logo from "../../../image/logo/logo.png";
import Flags from "../../customElements/select/selectFlags";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container-xl navbar-container">
        <div className="logo">
          <img className="logo" src={logo} />
        </div>
        <div className="menu-line">
          <ul className="menu-inline navbar-nav">
            <li>
              <a className="menu__item" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Service fees
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                API
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                News
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Madeamaze
              </a>
            </li>
            <li>
              <div className="menu__item">
                <Flags />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
