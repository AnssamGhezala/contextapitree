import React, { Component } from "react";
import "./App.css";
import Tree from "./Components/Tree/Tree";
import { Provider } from "./context/context";

class App extends Component {
  state = {
    value: ""
  };

  onUserInput = newVal => {
    this.setState({ value: newVal });
  };

  render() {
    return (
      <Provider
        value={{ val: this.state.value, onUserInput: this.onUserInput }}
      >
        <div className="App">
          <Tree title="Root" />
        </div>
      </Provider>
    );
  }
}

export default App;
