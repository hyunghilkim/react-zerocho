import React, { PureComponent } from "react";

class Try extends PureComponent {
  constructor(props) {
    super(porps);
    //다른 동작 넣을수 있음. 일급객체 일급함수 이기에 활용도가 높다!
    this.state = {
      result: this.props.result,
      try: this.props.try
    };
  }

  render() {
    const { tryInfo } = this.props;
    <li>
      <div>{tryInfo}</div>
      <div>{tryInfo.result}</div>
    </li>;
  }
}
