const React = require("react");
const { useState, useRef } = React;

const WordRelayHooks = () => {
  const [word, setWord] = useState("김현길");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };
  const onChangeInput = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput" />
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button id="wordInput" className="wordInput">
          입력
        </button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelayHooks;
