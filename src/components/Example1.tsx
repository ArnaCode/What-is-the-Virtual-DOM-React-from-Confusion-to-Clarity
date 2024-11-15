import { useState } from "react";

export default function Example1() {
  // Example 1: Understanding DOM Updates

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
