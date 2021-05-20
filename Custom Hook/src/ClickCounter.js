import React from "react";
import "./styles.css";
import useCounter from "./useCounter";

export default function ClickCounter() {
  const [counter, increment] = useCounter(0);

  return (
    <div className="clickCounter" onClick={increment}>
      <div>{counter}</div>
    </div>
  );
}
