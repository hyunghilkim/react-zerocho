import React, { Component, createRef } from "react";
import Try from "./Try";

function getNumbers() {
  // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
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
    answer: getNumbers(), // ex: [1,3,5,7]
    tries: [] // push 쓰면 안 돼요
  };

  onSubmitForm = e => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value.length === 4) {
      //1. 정답일때
      if (value === answer.join("")) {
        this.setState(prevState => {
          return {
            result: "홈런!",
            // 과거 tries 넣어주고, 새로운 요소를 넣어줘야 state.tries가 변화되었다는 것을 리액트가 감지하여 렌더링을 실시
            tries: [...prevState.tries, { try: value, result: "홈런!" }]
          };
        });
        //1.1 게임을 초기화 한다.
        alert("정답입니다!! 게임을 다시 시작합니다!");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: []
        });
        this.inputRef.current.focus();
      }
      //2. 답이 틀렸을때
      else {
        const answerArray = value.split("").map(v => parseInt(v));
        let strike = 0;
        let ball = 0;
        //2.1 10번 이상 틀렸을 때
        if (tries.length >= 9) {
          this.setState({
            result: `10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다!`
          });
          //2.1.1 게임을 초기화 한다.
          alert("10번실패! 게임을 다시 시작합니다!");
          this.setState({
            value: "",
            answer: getNumbers(),
            tries: []
          });
          this.inputRef.current.focus();
        }
        //2.2 10번 미만으로 틀렸을때, 스트라이크 카운트와 볼 카운트를 센다.
        else {
          for (let i = 0; i < 4; i += 1) {
            //2.2.1 스트라이크 카운트를 센다.
            if (answerArray[i] === answer[i]) {
              strike += 1;
            }
            //2.2.2 볼 카운트를 센다. * includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.
            else if (answer.includes(answerArray[i])) {
              ball += 1;
            }
          }
          //2.2.3 스트라이크 카운트와 볼 카운트를 state에 저장한다.
          this.setState(prevState => {
            return {
              tries: [
                ...prevState.tries,
                { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` }
              ],
              value: ""
            };
          });
          this.inputRef.current.focus();
        }
      }
    } else {
      alert("네 자리 숫자를 입력하십시오");
    }
  };

  onChangeInput = e => {
    this.setState({
      value: e.target.value
    });
  };

  inputRef = createRef(); // this.inputRef

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            maxLength={4}
            value={value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}
export default NumberBaseball; // import NumberBaseball;
