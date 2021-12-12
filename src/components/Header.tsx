import React, { useState } from "react";
import "../css/style.css";
import logo from "../image/logo/logo.png";
import Select from "./select/SelectFlags";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container-xl navbar-container">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#">
                Главная
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Проекты
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Команда
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Блог
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Контакты
              </a>
            </li>
            <li>
              <div className="menu__item">
                <Select />
              </div>
            </li>
          </ul>
        </div>
        <div className="menu-line">
          <ul className="menu-inline navbar-nav">
            <li>
              <a className="menu__item" href="#">
                Главная
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Проекты
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Команда
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Блог
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Контакты
              </a>
            </li>
            <li>
              <div className="menu__item">
                <Select />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
