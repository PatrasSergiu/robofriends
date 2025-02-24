import React, { useState } from "react";

const CounterButton = ({ color }) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <button color={color} onClick={updateCount}>
      Increment {count}
    </button>
  );
};

export default CounterButton;
