import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }
  handleFormSubmit = (e) => {
    console.log("this.emailInputRef : ", this.emailInputRef);
    console.log("this.passwordInputRef: ", this.passwordInputRef);
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form className="login-form">
          <span className="login-signup-header">Log In</span>
          <div className="field">
            <input
              type="email"
              placeholder="Email"
              ref={this.emailInputRef}
              required
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              ref={this.passwordInputRef}
              required
            />
          </div>
          <div className="field">
            <button onClick={this.handleFormSubmit}>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
