const path = require("path");
const webpack = require("webpack");

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
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"] //한국에서 브라우저 점유율 5%이상의 브라우저는 다 지원을 한다.
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  //확장 프로그램
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  //출력
  output: {
    //C:\users\김현길\Desktop\local\react-zerocho\basic\lectture\dist  * __dirname : 현재폴더
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
