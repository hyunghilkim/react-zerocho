import React, { Component, createRef } from "react";
import Try from "./Try";

// 숫자 4개를 중복되지 않고 랜덤하게 뽑는 함수
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(), // ex : [1,3,5,7]
    tries: [] // push 쓰면 안된다.
  };

  onSubmitForm = e => {
    e.preventDefault();
    //1. 정답일때
    if (this.state.value === this.state.answer.join("")) {
      this.setState({
        result: "홈런!",
        // 과거 tries 넣어주고, 새로운 요소를 넣어줘야 state.tries가 변화되었다는 것을 리액트가 감지하여 렌더링을 실시
        tries: [...this.state.tries, { try: this.state.value, result: "홈런!" }]
      });
      //1.1 게임을 초기화 한다.
      alert("게임을 다시 시작합니다!");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: []
      });
    }
    //2. 정답이 아닐때
    else {
      const answerArray = this.state.value.split("").map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      //2.1  10번 이상 틀렸을때
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패 답은 ${this.state.answer.join(
            ","
          )} 였습니다!`
        });
        //2.1.1 게임을 초기화 한다.
        alert("게임을 다시 시작합니다");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: []
        });
      }
      //2.2 10번 미만으로 틀렸을때(기회부여) 스트라이크 카운트와 볼 카운트를 센다.
      else {
        for (let i = 0; i < 4; i++) {
          //2.2.1 스트라이크 카운트를 센다
          if (answerArray[i] === this.state.answer[i]) {
            strike++;
          }
          //2.2.2 볼 카운트를 센다. * includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.
          else if (answer.includes(answerArray[i])) {
            ball++;
          }
        }
        //2.2.3 스트라이크 카운트와 볼 카운트를 state에 저장한다.
        this.setState(prevState => {
          return {
            tries: [
              ...prevState.tries,
              { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` }
            ],
            value: ""
          };
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangeInput = e => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value
    });
  };

  inputRef = createRef();

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return <Try key={i} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
