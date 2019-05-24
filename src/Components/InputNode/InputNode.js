import React, { Component } from "react";
import "./InputNode.css";
import { Consumer } from "../../context/context";

class InputNode extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="InputNode element">
        <header> a1 </header>

        <Consumer>
          {({ val, onUserInput }) => (
            <input
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

export default InputNode;
