'use client'
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Counter: {count}</div>
      <button style={{margin:'1rem'}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{margin:'1rem'}}  onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
