import React, { Component } from "react";
import "./RightmostChild.css";
import { Consumer } from "../../context/context";

class RightmostChild extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="Child element ">
        <center> E </center>
        <Consumer>{context => <p>{context.val}</p>}</Consumer>
      </div>
    );
  }
}

export default RightmostChild;
