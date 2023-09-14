import React, { useState, useEffect } from "react";

function Counter() {
  // Initialize the count state variable with an initial value of 0.
  const [count, setCount] = useState(0);

  // Define a function to increment the count.
  const increment = () => {
    setCount(count + 1);
  };

  // Define a function to decrement the count.
  const decrement = () => {
    setCount(count - 1);
  };

  // Define a function to reset the count.
  const reset = () => {
    setCount(0);
  };

  // Use useEffect to print the value of count to the console whenever it changes.
  useEffect(() => {
    console.log("Count value is:", count);
  }, [count]);

  return (
    <>
      <p>Count value is: {count}</p>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Plus (+)</button>
      <button onClick={decrement}>Minus (-)</button>
    </>
  );
}

export default Counter;
