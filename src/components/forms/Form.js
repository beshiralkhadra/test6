import React, { Component } from "react";
import "./index.css";
import { withRouter } from "react-router";
import history from "../history";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      Rpassword: "",
      isApproved: false,
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleRpassword = (event) => {
    this.setState({
      Rpassword: event.target.value,
    });
  };
  // checkingIfUserExist = () => {
  //   let bigData = {};

  //   console.log(userNewEmail);
  //   if (bigData.includes(userNewEmail)) {
  //     alert("email already exist");
  //   } else {
  handleSubmit = (e) => {
    e.preventDefault();
    let bigData = [];
    let getUserData = localStorage.getItem("user");
    let userEmail = JSON.parse(getUserData);

    let userNewEmail = userEmail.email;
    console.log(userNewEmail);
    console.log(bigData);
    if (bigData.includes(userNewEmail)) {
      alert("email already exist");
    } else {
      bigData.push(this.state.email);
      this.setState(localStorage.setItem("user", JSON.stringify(this.state)));
      this.setState((prevState) => ({
        isApproved: !prevState.isApproved,
      }));
      this.props.history.push({
        pathname: `/Loginform`,
      });
    }

    // let bigData = [];
    // bigData.push(this.state.email);
    // console.log(bigData);
    // this.setState(
    //   (preEmail) => (
    //     {
    //       bigData: preEmail.push(this.state.email),
    //     },
    //     console.log(preEmail)
    //   )
    // );

    // alert("helllllo everyone");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-container">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          {this.state.email == "" ? (
            <span style={{ color: "red" }}>please enter your email </span>
          ) : null}
          <label htmlFor="passowrd">Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />

          {this.state.password == "" || this.state.password.length < 6 ? (
            <span style={{ color: "red" }}>not correct password </span>
          ) : null}
          <label htmlFor="r.password">Reapeat-password:</label>
          <input
            type="password"
            value={this.state.Rpassword}
            onChange={this.handleRpassword}
          />
          {this.state.Rpassword != this.state.password ? (
            <span style={{ color: "red" }}>not match </span>
          ) : null}

          <button type="submit" className="form-btn">
            submit
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(Form);
