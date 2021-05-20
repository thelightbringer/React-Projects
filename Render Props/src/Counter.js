import React, { useState } from "react";
import "./styles.css";

export default function Counter(props) {
  const [counter, setCount] = useState(0);

  const increment = () => setCount(counter + 1);

  return <>{props.render(counter, increment)}</>;
}
