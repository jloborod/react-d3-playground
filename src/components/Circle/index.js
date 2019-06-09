import React, { useState } from 'react';

import Circle from './Circle';

export default () => {
  const [isLeft, setIsLeft] = useState(true);

  const handleClick = () => {
    setIsLeft(!isLeft);
  };

  return (
    <Circle
      width='100%'
      height='100px'
      x={isLeft ? 15 : 300}
      onClick={handleClick}
    />
  );
};