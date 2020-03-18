import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hero extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <header className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="gradient-accent">Web Developer</span> and <br />
              <span className="gradient-accent">Marketer</span> from Nashville,
              TN.
            </h1>
            <p className="hero__text">
              For those who want help sharing their story online, I design and
              market websites with bold messages and modern technologies.
            </p>
            <div className="hero__buttons">
              <Link className="btn hero__btn-primary" to="/projects">
                View Projects
              </Link>
              <Link className="btn hero__btn-primary" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
