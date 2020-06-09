import React from "react";
import Bounce from "react-reveal/Bounce";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contactwrapper">
        <form
          className="contact"
          onSubmit={this.submitForm}
          action="https://formspree.io/mgenklwl"
          method="POST"
        >
          <Bounce top>
            <h2>GET IN TOUCH</h2>
          </Bounce>
          <Bounce left>
            <h3>NAME</h3>
            <input
              className="smallInput"
              type="text"
              name="name"
              placeholder="Name"
            />
            <h3> YOUR EMAIL</h3>
            <input
              type="email"
              name="email"
              className="smallInput"
              placeholder="Email"
            />
            <h3>MESSAGE</h3>
            <input
              type="text"
              name="message"
              className="messageInput"
              placeholder="Message"
            />
          </Bounce>
          <br></br>
          <br></br>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <Bounce right>
              <button className="submitBtn">Submit</button>
            </Bounce>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
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
