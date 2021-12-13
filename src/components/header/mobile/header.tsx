import React, { useState } from "react";
import "../../../css/style.css";
import logo from "../../../image/logo/logo.png";
import Flags from "../../customElements/select/selectFlags";
import ScoreMobile from "../../scoreBlock/mobile/score";

function HeaderMobile() {
  return (
    <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container-xl navbar-container">
        <div className="logo-mobile">
          <img className="logo-mobile" src={logo} />
        </div>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                SERVICE FEES
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                API
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                NEWS
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                MADEAMAZE
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
      <div className="container">
        <div className="mobile-score">
          <ScoreMobile />
        </div>
      </div>
    </nav>
  );
}

export default HeaderMobile;
