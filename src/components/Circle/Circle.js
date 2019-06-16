import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const Circle = ({ x, width, height, color, onClick }) => {
  const ref = useRef();
  const [ cx, setCx ] = useState(x);

  useEffect(() => {
    const animateD3Element = () => {
      d3
        .select(ref.current)
        .transition()
        .duration(300)
        .ease(d3.easeCubicInOut)
        .attr('cx', x)
        .on('end', () => {
          setCx(x);
        });
    }
    animateD3Element();
  }, [x]);

  return (
    <svg style={{ width, height, fill: `${color}` }} onClick={onClick}>
      <circle
        r={10}
        cx={cx}
        cy={15}
        ref={ref}
      />
    </svg>
  );
}

Circle.propTypes = {
  x: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func
};

Circle.defaultProps = {
  x: 0,
  width: 340,
  height: 100,
  color: 'black',
  onClick: () => {}
};

export default Circle;
