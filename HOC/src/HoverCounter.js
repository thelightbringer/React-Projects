import React from "react";
import "./styles.css";
import Hoc from "./HOC";

function HoverCounter(props) {
  const { counter, increment } = props;
  return (
    <div className="hover" onMouseOver={increment}>
      <div>{counter}</div>
    </div>
  );
}

export default Hoc(HoverCounter);
