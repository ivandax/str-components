import { useState } from "react";
import "./counter.css";

export function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((c) => c + 1);
  };

  const decreaseCount = () => {
    if(count <= 0) return;
    setCount((c) => c - 1);
  };

  return (
    <div className="counter">
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}
