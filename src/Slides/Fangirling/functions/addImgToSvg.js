export default ({ svg, img, left, top, scale, size }) => {
  const { w, h } = size;

  const group = svg
    .append("g")
    .attr("transform", `translate(${left}, ${top}) scale(${scale})`);

  group
    .append("svg:image")
    .attr("xlink:href", img)
    .attr("width", w)
    .attr("height", h)
    .attr("x", 0)
    .attr("y", 0);

  return group
};
