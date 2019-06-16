import React, { useState } from 'react';

import Circle from './Circle';

export default () => {
  const [isLeft, setIsLeft] = useState(true);

  const handleClick = () => {
    setIsLeft(!isLeft);
  };

  return (
    <Circle
      width={340}
      height={100}
      color='white'
      x={isLeft ? 15 : 300}
      onClick={handleClick}
    />
  );
};