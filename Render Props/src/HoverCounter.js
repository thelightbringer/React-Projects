import React from "react";
import "./styles.css";

export default function HoverCounter(props) {
  const { counter, increment } = props;

  return (
    <div className="hover" onMouseOver={increment}>
      <div>{counter}</div>
    </div>
  );
}
