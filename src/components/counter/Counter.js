import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count !== 0 && setCount(count - 1);
  };
  return (
    <>
      <h1>Yo wassup!?</h1>
      <div id="counter-value">{count}</div>
      <button id="increment-btn" onClick={increment}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
