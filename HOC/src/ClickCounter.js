import React from "react";
import "./styles.css";
import Hoc from "./HOC";

function ClickCounter(props) {
  const { counter, increment } = props;

  return (
    <div className="clickCounter" onClick={increment}>
      <div>{counter}</div>
    </div>
  );
}

export default Hoc(ClickCounter);
