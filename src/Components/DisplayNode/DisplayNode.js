import React, { Component } from "react";
import "./DisplayNode.css";
import { FamilyConsumer } from "../../context/context";

class DisplayNode extends Component {
  state = { value: "" };

  render() {
    return (
      <div className="DisplayNode element">
        <header> You typed: </header>
        <div className="Result">
          {/* context is the object with lastName // on it. It gets passed as */}
          {/* an argument */}
          <FamilyConsumer>{context => <p>{context.val}</p>}</FamilyConsumer>
        </div>
      </div>
    );
  }
}

export default DisplayNode;
