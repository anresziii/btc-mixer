import React from "react";
import "../css/style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container-xl">
        <div className="navbar-brand d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center"></div>
          <span>Logo</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                One
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Two
              </a>
            </li>
            <li className="nav-item">
              <select className="nav-link nav-select" id="lang">
                <option disabled>Choose language</option>
                <option defaultValue="/en/" selected>
                  En
                </option>
                <option defaultValue="/ru/">Russian</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;