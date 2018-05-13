// eslint-disable-next-line
import { transition } from "d3-transition";
import { easeCubicIn } from "d3-ease";

export default ({ group, left, top, scale }) => {
  group
    .transition(easeCubicIn)
    .duration(200)
    .attr("transform", `translate(${left}, ${top}) scale(${scale})`);
};
