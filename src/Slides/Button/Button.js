import React, { Component } from "react";
import { select } from "d3-selection";
// eslint-disable-next-line
import { transition } from "d3-transition";
import { easeCubicIn } from "d3-ease";

import { Wrapper, Button } from "./styles";

const bars = ["M0,0", "L20,0", "M0,7", "L20, 7", "M0,14", "L20,14"];
const cross = ["M2,0", "L18,14", "M10,7", "L10, 7", "M2,14", "L18,0"];

export default class BarsCross extends Component {
  state = {
    index: 0,
    states: [{ primitive: bars }, { primitive: cross }],
    icon: null
  };

  toggle = () => {
    let { index, states } = this.state;

    this.setState({ index: index + 1 });
    const next = index % 2;
    return states[next];
  };

  componentDidMount() {
    const { states } = this.state;
    const svg = select(this.svg);

    const icon = svg.append("g").attr("transform", `translate(${10}, ${12})`);

    icon
      .append("path")
      .attr("d", states[0]["primitive"])
      .attr("stroke", "#000")
      .attr("stroke-width", 2)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linecap", "round");

    this.setState({ icon });
  }

  transition = () => {
    const { icon } = this.state;
    const { primitive } = this.toggle();

    icon
      .select("path")
      .transition(easeCubicIn)
      .duration(250)
      .attr("d", primitive);
  };

  render() {
    return (
      <Wrapper>
        <svg ref={node => (this.svg = node)} width="500px" height="500px" />
        <Button onClick={this.transition} />
      </Wrapper>
    );
  }
}
