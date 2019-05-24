import React, { Component } from "react";
import "./Tree.css";
import TreeA from "../TreeA/TreeA";
import TreeB from "../TreeB/TreeB";

class Tree extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="Tree element">
        <header>{this.props.title}</header>
        <TreeA />
        <TreeB />
      </div>
    );
  }
}

export default Tree;
