const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval", // 빠르게 한다.
  // 입력
  entry: {},
  //출력
  output: {
    path: path.join(__dirname, "dist")
  }
};
