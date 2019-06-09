import React, { useState } from 'react';

import Circle from './Circle';

export default () => {
  const [isLeft, setIsLeft] = useState(true);

  const handleClick = () => {
    setIsLeft(!isLeft);
  };

  return (
    <svg style={{ width: '100%', height: '100px' }} onClick={handleClick} >
      <Circle x={isLeft ? 15 : 300} />
    </svg>
  )
};