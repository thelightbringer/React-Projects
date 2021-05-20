import React from "react";
import "./styles.css";
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";

export default function App() {
  return (
    <div className="App">
      <HoverCounter />
      <ClickCounter />
    </div>
  );
}
