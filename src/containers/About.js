import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="about">
        <div className="container about__container">
          <div className="about__content">
            <h1 className="about__title">
              <span className="gradient-accent">Tell</span> Your Story
            </h1>
            <p className="about__text">
              I believe many people have important stories to tell &mdash; but
              sometimes they need help communicating those stories to a broader
              audience. By combining front-end web development with the latest
              in digital marketing, I help people use their message to build a
              movement.
            </p>
            <p className="about__text">
              Interested in working together? I am currently available for
              freelance projects.
            </p>
            <div className="about__buttons">
              <Link className="btn hero__btn-primary" to="/contact">
                Let's Talk
              </Link>
            </div>
          </div>
          <div className="about__skills">
            <h3 className="skills__title">Tools I Like To Use</h3>
            <div className="skills__icons">
              <i
                aria-hidden="true"
                className="devicon-html5-plain-wordmark colored dev-icon"
                title="HTML5"
              >
                <span className="sr-only">HTML5</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-css3-plain-wordmark colored dev-icon"
                title="CSS3"
              >
                <span className="sr-only">CSS3</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-bootstrap-plain-wordmark colored dev-icon"
                title="Bootstrap"
              >
                <span className="sr-only">Bootstrap</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-javascript-plain colored dev-icon"
                title="Javascript ES6"
              >
                <span className="sr-only">Javascript ES6</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-jquery-plain-wordmark colored dev-icon"
                title="Jquery"
              >
                <span className="sr-only">Jquery</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-photoshop-plain colored dev-icon"
                title="Adobe Photoshop"
              >
                <span className="sr-only">Adobe Photoshop</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-nodejs-plain-wordmark colored dev-icon"
                title="Node.js"
              >
                <span className="sr-only">Node.js</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-git-plain-wordmark colored dev-icon"
                title="Git"
              >
                <span className="sr-only">Git</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-react-original-wordmark colored dev-icon"
                title="React"
              >
                <span className="sr-only">React</span>
              </i>
              <i
                aria-hidden="true"
                className="devicon-wordpress-plain-wordmark dev-icon"
                title="WordPress"
              >
                <span className="sr-only">WordPress</span>
              </i>
            </div>
            <div className="about__site">
              <h3 className="site__title">About This Site</h3>
              <div className="site__desc">
                <p>
                  I hand-coded this site using React and CSS. Icons from{" "}
                  <a
                    className="external-link"
                    href="https://konpa.github.io/devicon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Devicon.
                  </a>
                </p>
                <a
                  className="btn hero__btn-primary"
                  href="https://github.com/jffryan/personal-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source on Github{" "}
                  <i aria-hidden="true" className="devicon-github-plain"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
