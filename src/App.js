import React, { Component } from "react";
import { BrowserRouter as Router, Route, history } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/Header";
import Counters from "./components/counter/counters";
import Form from "./components/forms/Form";
import Loginform from "./components/forms/Loginform";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "/src/index.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: [
        {
          id: 1,
          item: "first",
          counterOne: 0,
        },
        {
          id: 2,
          item: "second",
          counterOne: 0,
        },
        {
          id: 3,
          item: "third",
          counterOne: 0,
        },
      ],
      total: 0,
    };
  }
  handleFirstClick = (firstCounter) => {
    // console.log(firstCounter);
    const newState = [...this.state.counter];
    const newMe = newState[firstCounter - 1];
    newMe.counterOne++;
    this.setState({ newState });
    let newTotal = this.state.total;
    newTotal += 1;
    this.setState({ total: newTotal });
  };
  handleSecondClick = (secondCounter) => {
    const newState = [...this.state.counter];
    const newMe = newState[secondCounter - 1];
    if (newMe.counterOne > 0) {
      newMe.counterOne--;
      this.setState({ newState });
      let newTotal = this.state.total;
      newTotal -= 1;
      this.setState({ total: newTotal });
    }
  };

  render() {
    return (
      <Router>
        {/* <Header /> */}
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/Loginform">
          <Loginform />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/counter">
          <h2>Total:{this.state.total}</h2>
          {this.state.counter.map((items) => (
            <Counters
              key={items.key}
              option={items.item}
              yourNumber={items.counterOne}
              id={items.id}
              willIncrease={this.handleFirstClick}
              willDecrease={this.handleSecondClick}
            />
          ))}
        </Route>

        {/* <Loginform /> */}
      </Router>
    );
  }
}

export default App;
