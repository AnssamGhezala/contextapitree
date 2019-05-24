import React, { Component } from "react";
import "./InputNode.css";

class InputNode extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="InputNode element">
        <header> a1 </header>
        <input
          type="text"
          value={this.props.val}
          onChange={e => this.props.onUserInput(e.target.value)}
        />
      </div>
    );
  }
}

export default InputNode;
