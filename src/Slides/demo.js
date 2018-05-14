import React, { Component, Fragment } from "react";

class BasicD3 extends Component {
  state = {
    group: null
  };

  componentDidMount() {
    const svg = select(this.svg);

    // this.setState({ group: groupName });
  }

  render() {
    return (
      <Fragment>
        <svg ref={node => (this.svg = node)} width="500px" height="500px" />
      </Fragment>
    );
  }
}

export default BasicD3;
