import React, { Component } from "react";
import "./DisplayNode.css";
import { Consumer } from "../../context/context";

class DisplayNode extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="DisplayNode element">
        <header> You typed: </header>
        <div className="Result">
          {/* context is the object with lastName // on it. It gets passed as */}
          {/* an argument */}
          <Consumer>{context => <p>{context.val}</p>}</Consumer>
        </div>
      </div>
    );
  }
}

export default DisplayNode;
