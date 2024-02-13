import React, { useState } from 'react';
import Button from './button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = (multiplier) => {
    setCount(count + multiplier);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onIncrease={handleIncrease} multiplier={1} />
      <Button onIncrease={handleIncrease} multiplier={5} />
      <Button onIncrease={handleIncrease} multiplier={10} />
    </div>
  );
};

export default Counter;
