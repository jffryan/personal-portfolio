import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xknwbjov"
        method="POST"
        className="contact__form"
      >
        <div>
          <label htmlFor="name">Name: </label>
          <br />
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea name="message"></textarea>
        </div>
        <div>
          {status === "SUCCESS" ? (
            <p>Thanks! I'll try to get back to you within 1 business day.</p>
          ) : (
            <button className="btn hero__btn-primary contact__button">
              Submit
            </button>
          )}
          {status === "ERROR" && (
            <p>
              There was an error submitting your form. <br />
              Please try again later or email me directly at contact@jffryan.com
            </p>
          )}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
