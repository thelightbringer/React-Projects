import { useState } from "react";
import "./styles.css";

export default function useCounter(initValue) {
  const value = isNaN(initValue) ? 0 : initValue;
  const [counter, setCount] = useState(value);

  function increment() {
    setCount(counter + 1);
  }

  return [counter, increment];
}
