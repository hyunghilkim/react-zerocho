const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval", // 빠르게 한다.
  resolve: {
    extensions: [".js", ".jsx"]
  },
  // 입력
  entry: {
    // 이미 다른곳에서 불러왔으면 그 파일은 넣을 필요가 없다.
    app: ["./client"]
  },
  //출력
  output: {
    //C:\users\김현길\Desktop\local\react-zerocho\basic\lectture\dist  * __dirname : 현재폴더
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
