import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleFormSubmit = (e) => {
    // console.log("this.emailInputRef : ", this.emailInputRef);
    // console.log("this.passwordInputRef: ", this.passwordInputRef);
    e.preventDefault();
  };
  handleEmailInputChange = (e) => {
    console.log(e.target.value);
    this.setState((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  handlePasswordInputChange = (e) => {
    // console.log(e.target.value);
    this.setState((prev) => {
      return { ...prev, password: e.target.value };
    });
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
              // ref={this.emailInputRef}
              onChange={this.handleEmailInputChange}
              value={this.state.email}
              required
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              // ref={this.passwordInputRef}
              onChange={this.handlePasswordInputChange}
              value={this.state.password}
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
