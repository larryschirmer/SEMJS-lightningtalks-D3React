import React, { Component } from "react";
import { select } from "d3-selection";
import { Wrapper, ButtonSection, Button } from "./styles";

import { face, rightHand, leftHand } from "./images";
import { addImgToSvg, transitionGroup } from "./functions";

class Fangirling extends Component {
  state = {
    index: 0,
    states: [
      { right: -15, left: 15, scale: 1.95 },
      { right: 0, left: 0, scale: 2 },
    ],
    fangirlRightHand: null,
    fangirlLeftHand: null
  };

  componentDidMount() {
    const svg = select(this.svg);

    /* --- */

    addImgToSvg({
      svg,
      img: face,
      left: 55,
      top: 55,
      scale: 2,
      size: { w: 200, h: 200 }
    });

    /* --- */

    const fangirlRightHand = addImgToSvg({
      svg,
      img: rightHand,
      left: 302,
      top: 335,
      scale: 2,
      size: { w: 48, h: 77 }
    });

    /* --- */

    const fangirlLeftHand = addImgToSvg({
      svg,
      img: leftHand,
      left: 96,
      top: 334,
      scale: 2,
      size: { w: 48, h: 77 }
    });

    this.setState({ fangirlRightHand, fangirlLeftHand });
  }

  toggle = () => {
    let { index, states } = this.state;

    this.setState({ index: index + 1 });
    const next = index % 2;
    return states[next];
  };

  transition = () => {
    const { fangirlRightHand, fangirlLeftHand } = this.state;
    const { right, left, scale } = this.toggle();

    transitionGroup({
      group: fangirlRightHand,
      left: 302 + right,
      top: 335 + right / 3,
      scale
    });

    transitionGroup({
      group: fangirlLeftHand,
      left: 96 + left,
      top: 334 - left / 3,
      scale
    });
  };

  render() {
    return (
      <Wrapper>
        <svg ref={node => (this.svg = node)} width="500px" height="500px" />
        <ButtonSection>
          <Button onClick={this.transition} >Fangirl! <span role="img" aria-label="Upside-Down Face">🙃</span></Button>
        </ButtonSection>
      </Wrapper>
    );
  }
}

export default Fangirling;
