import React, { Component } from "react";

import ContactForm from "../components/ContactForm";

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__content">
            <h1 className="contact__title">
              <span className="gradient-accent">Contact</span>
            </h1>
            <p className="contact__text">
              Want to discuss your project together? Interested in information
              on how I built something? Just want to say hi? Fill out this form
              to send a message at high-priority straight to my inbox.
            </p>
            <p className="contact__text">
              Alternatively, you can email me directly at{" "}
              <a href="mailto:contact@jffryan.com" className="external-link">
                contact@jffryan.com
              </a>
            </p>
            <p className="contact__text">
              I am currently available for freelance projects.
            </p>
          </div>
          <div className="contact__form-container">
            <h3 className="contact__subtitle">Let's Connect</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    );
  }
}
