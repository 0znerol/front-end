import { Component } from "react";
import React from "react";

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.src} alt="Image" className="rounded shadow" />;
  }
}
