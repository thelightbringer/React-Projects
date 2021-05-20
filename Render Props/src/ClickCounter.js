import React from "react";
import "./styles.css";

export default function ClickCounter(props) {
  const { counter, increment } = props;

  return (
    <div className="clickCounter" onClick={increment}>
      <div>{counter}</div>
    </div>
  );
}
