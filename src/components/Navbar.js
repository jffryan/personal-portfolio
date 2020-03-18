import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="main-nav">
          <h1 className="main-nav__logo">
            <Link to="/">
              J<span className="accent">/</span>R
            </Link>
          </h1>
          <ul className="main-nav__menu">
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/about">
                About
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
