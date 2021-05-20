import React, { Component } from "react";
import "./styles.css";

function Hoc(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
    }

    increment() {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <WrappedComponent
          counter={this.state.count}
          increment={this.increment}
        />
      );
    }
  };
}

export default Hoc;
