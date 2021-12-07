import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "/src/index.css";
class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      //   adminUser :[{
      //       adminEmail:"admin@gmail.com",
      //       adminPassword:"123456"
      //   }]
    };
  }
  handleLoginEmail = (event) => {
    this.setState({ loginEmail: event.target.value });
  };
  handleLoginPassword = (event) => {
    this.setState({ loginPassword: event.target.value });
  };
  handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.loginEmail == "admin@gmail.com" &&
      this.state.loginPassword == "123456"
    ) {
      this.props.history.push({
        pathname: `/dashboard`,
      });
    } else {
      console.log(this.state.loginEmail);
      this.props.history.push({
        pathname: `/Home`,
      });
    }
    // console.log("helllo");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit} className="login-form">
          <label>Email</label>
          <input
            type="email"
            value={this.state.loginEmail}
            onChange={this.handleLoginEmail}
            required
          />
          <label>password</label>
          <input
            type="password"
            value={this.state.loginPassword}
            onChange={this.handleLoginPassword}
            required
          />
          <button className="login-btn">submit</button>
          <Link to="/" className="login-link">
            i don't have an account
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Loginform);
