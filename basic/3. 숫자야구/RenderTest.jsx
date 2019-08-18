import React, { PureComponent } from "react";
import { highlightUpdates } from "react-highlight-updates";

highlightUpdates();

class Test extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    object: {},
    array: []
  };

  /* shouldComponentUpdate(nextProps, nextState, nextContext) {
    //this.state.conuter가 현재의 카운터 , nextState.counter가 미래의 카운터
    // true를 리턴하면 랜더링을 하고, false를 리턴하면 랜더링을 안한다
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  } */

  onClick = () => {
    this.setState({ array: [] });
  };

  render() {
    console.log("랜더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
