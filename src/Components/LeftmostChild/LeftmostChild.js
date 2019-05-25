import React, { Component } from "react";
import "./LeftmostChild.css";
import { Consumer } from "../../context/context";

class LeftmostChild extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="Child element">
        <center> D </center>
        <Consumer>
          {({ val, onUserInput }) => (
            <textarea
              type="text"
              value={val}
              onChange={e => onUserInput(e.target.value)}
            />
          )}
        </Consumer>
      </div>
    );
  }
}

export default LeftmostChild;
