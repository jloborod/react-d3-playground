import React from 'react';
import * as d3 from 'd3';

class Circle extends React.Component {
  state = {
    x: this.props.x
  };

  ref = React.createRef();

  componentDidUpdate() {
    d3
      .select(this.ref.current)
      .transition()
      .duration(300)
      .ease(d3.easeCubicInOut)
      .attr('cx', this.props.x)
      .on('end', () => {
        this.setState({
          x: this.props.x
        });
      })
  }

  render() {
    const { x } = this.state;
    return (
      <circle
        r={10}
        cx={x}
        cy={15}
        ref={this.ref}
      />
    )
  }
}

export default Circle;
