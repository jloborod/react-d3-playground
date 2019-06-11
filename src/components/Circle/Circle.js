import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Circle = ({ x, width, height, onClick }) => {
  const [ cx, setCx ] = useState(x);
  const ref = useRef();

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
    <svg style={{ width, height }} onClick={onClick}>
      <circle
        r={10}
        cx={cx}
        cy={15}
        ref={ref}
      />
    </svg>
  );
}

export default Circle;
