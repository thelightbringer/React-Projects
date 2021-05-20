import React from "react";
import "./styles.css";
import useCounter from "./useCounter";

export default function HoverCounter() {
  const [counter, increment] = useCounter(0);

  return (
    <div className="hover" onMouseOver={increment}>
      <div>{counter}</div>
    </div>
  );
}
