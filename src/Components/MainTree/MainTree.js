import React, { Component } from "react";
import "./MainTree.css";
import LeftSubtree from "../LeftSubtree/LeftSubtree";
import RightSubtree from "../RightSubtree/RightSubtree";

class MainTree extends Component {
  state = {
    value: ""
  };

  onUserInput = newVal => {
    this.setState({ value: newVal });
  };

  render() {
    return (
      <div className="Root element">
        <center> A </center>

        <LeftSubtree />
        <RightSubtree />
        {/* </Provider> */}
      </div>
    );
  }
}

export default MainTree;
