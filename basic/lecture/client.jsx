const React = require("react");
const ReactDom = require("react-dom");
const WordRelayHooks = require("./WordRelayHooks");
const { hot } = require("react-hot-loader/root");
const Hot = hot(WordRelayHooks);

ReactDom.render(<Hot />, document.querySelector("#root"));
