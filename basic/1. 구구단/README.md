### 구구단

#### 웹팩 설치 및 설정

```
    npm init    //npm 초기설정 package.json 폴더 생성
    npm i react react-dom   // 리액트와 리액트 돔 설치 : 띄어쓰기는 and를 의미한다.
    npm i -D webpack webpack-cli    // 웹팩 과 웹팩 cli 설치 : cli는 command line interface , 웹팩 cli는 개발자가 사용자 정의 웹팩 프로젝트를 설정시 속도up

    npm i -D @babel/core    기본적인 바벨 설치, 최신문법 바꾸어준다.
    npm i -D @bable/preset-env     환경에 맞게, 브라우저에 맞게 옛날문법으로 바꾸어 준다. plugin들의 모음이 preset이다
    npm i -D @bable/preset-react   JSX 문법 지원
    npm i -D babel-loader      바벨과 웹팩을 연결 해 준다.
    npm i -D @babel/plugin-proposal-class-properties    클래식 컴포넌트 state문법 사용을 지원

```

[바벨 브라우저 호환 설정 관련 사이트](https://github.com/browserslist)
