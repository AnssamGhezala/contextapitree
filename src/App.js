import React, { Component } from "react";
import "./App.css";
import Tree from "./Components/Tree/Tree";
import { FamilyProvider } from "./context/context";

class App extends Component {
  render() {
    return (
      <FamilyProvider value={{ val: "changed" }}>
        <div className="App">
          <Tree title="Root" />
        </div>
      </FamilyProvider>
    );
  }
}

export default App;
