import React from "react";
import "./styles.css";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";

export default function App() {
  return (
    <div className="App">
      <Counter
        render={(counter, increment) => (
          <HoverCounter counter={counter} increment={increment} />
        )}
      />
      <Counter
        render={(counter, increment) => (
          <ClickCounter counter={counter} increment={increment} />
        )}
      />
    </div>
  );
}
