import React, { useState, useRef } from "react";
import Try from "./Try";
import { highlightUpdates } from "react-highlight-updates";

highlightUpdates();

function getNumbers() {
  // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  console.log(array);
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();

    //1. 정답일때
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries(prevTries => {
        return [...prevTries, { try: value, result: "홈런!" }];
      });
      //1.1 게임을 초기화 한다.
      alert("정답입니다!! 게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    }
    //2. 답이 틀렸을때
    else {
      const answerArray = value.split("").map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      //2.1 10번 이상 틀렸을 때
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다!`);
        //2.1.1 게임을 초기화 한다.
        alert("10번실패! 게임을 다시 시작합니다!");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();
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
        setTries(prevState => [
          ...prevState,
          { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` }
        ]);
        setValue("");
        inputEl.current.focus();
      }
    }
  };

  const onChangeInput = e => {
    /* console.log(e.target.value); */
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
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
};

export default NumberBaseball;
