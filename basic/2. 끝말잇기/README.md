### 끝말잇기

#### HOOKS

```
- 기존 클랙식 컴포넌트에서 setState() 와 ref를 사용하지 않으면 함수형 컴포넌트를 작성했다.
- 함수로 컴포넌트를 작성하면 쉽고 가독성이 좋은데, 함수형 컴포넌트 작성 시, setState와 ref를 사용했으면 좋겠다는 요구가 생겨나
훅스가 만들어지게 되었다.
- 리액트도 hooks 사용을 장려하고 있다.
- hooks를 사용하면 간결해서 좋다.
- hooks의 단점 : 클랙식 컴퍼넌트를 사용하면 state가 업데이트 될때 render() 함수 부분만 랜더링, 바뀌면 또 렌더링
훅스 같은경우에는 함수 전부, 통째로 재실행되어 더 느릴수 있다.
```

#### WEBPACK

```
- 웹팩을 쓰는 이유 :
    실제 개발을 하게 되면 컴포넌트가 수십, 수백가지가 되는데,
    하나의 자바스크립트 파일에 다 넣게 되면 라인 수가 천줄 혹은 만줄이상이 될 수 있다.
    그렇게 되면 유지보수가 힘들어 지게 된다. 예시로 페이스북 컴포넌트가 2만개 라는 이야기가 있다.
    유지보수 측면에서 자바스크립트 파일을 여러개로 나누어야 유지보수가 쉬워지는데,
    한 천재가 여러개의 자바스크립트 파일을 하나의 파일로 합치는 기술을 만들었다. 바로 이것이 웹팩이다.
    하나로 합치면서 바벨도 만들 수 있다. 불필요한 부분도 없앨수도 있다. 아주 마법 같은 도구가 웹팩이다.
    제로초가 리액트 실무에서 수백에서 수천개의 자바스크립트 파일을 만들었다.
    웹팩을 할려면 NODE.JS를 배워야 함.
    NODE.JS는 자바스크립트 실행기 그 이상 이 이하도 아니다.
    리액트를 할려면 NODE.JS를 알아야 한다는 말은 서버를 알아야 한다는 것이 아니라, 웹팩을 돌리기 위한 도구를 알아야 함.

- 실제 서비스 할때는 웹팩이 필요없다. 개발 할때만 웹팩이 필요하다.

```

```
- 웹팩 관련 설치 및 설정

    npm init    //npm 초기설정 package.json 폴더 생성
    npm i react react-dom   // 리액트와 리액트 돔 설치 : 띄어쓰기는 and를 의미한다.
    npm i -D webpack webpack-cli    // 웹팩 과 웹팩 cli 설치 : cli는 command line interface , 웹팩 cli는 개발자가 사용자 정의 웹팩 프로젝트를 설정시 속도up

```

```
- 바벨 설치 및 설정

    npm i -D @babel/core    기본적인 바벨 설치, 최신문법 바꾸어준다.
    npm i -D @bable/preset-env     환경에 맞게, 브라우저에 맞게 옛날문법으로 바꾸어 준다.
    npm i -D @bable/preset-react   JSX 문법 지원
    npm i -D babel-loader      바벨과 웹팩을 연결 해 준다.
    npm i -D @babel/plugin-proposal-class-properties    클래식 컴포넌트 state문법 사용을 지원
```

#### 웹팩 빌드(npx webpack)없이 자동으로 빌드 하는 방법

```
    npm i -D react-hot-loader   //리액트 핫 로더 설치
    npm i -D webpack-dev-server //웹팩 데브 서버 설치
    package.json에 가서 명령어 "script"를 수정을 한다. "scripts": {"dev": "webpack-dev-server --hot"}

    웹팩 데브 서버가 하는일 :
    1. webpack.config.js을 읽어서 빌드를 해주고, 서버로 유지를 해준다.
    2. http://localhost:8080/ 로컬호스트 주소를 하나 준다. 접속하면 브라우저 오픈이 된다.

    리액트 핫 로더 설정 :
    1. client.jsx에서 아래와 같이 추가 한다.
    const { hot } = require("react-hot-loader/root");
    const Hot = hot(WordRelay);

    ReactDom.render(<Hot />, document.querySelector("#root"));

    2. webpack.config.js에서  로더/옵션/플러그인에 리액트 핫 로더를 추가한다.
    plugins: ["react-hot-loader/babel"]

    3. dist폴더/app.js를 삭제한다. 웹팩 데브 서버가 관여 하는듯
    4. index.html에서 script src 경로를 변경 한다. => <script src="./app.js"></script>

    * 이걸 마치면 수정사항이 생기면 자동으로 웹팩 빌드가 이루어진다.
```

#### CONSOLE

```
- npm run dev 나 npx webpack을 실행 시킨다.
- 크롬 콘솔 창에 [HMR] , [WDS] 가 출력된다.
- [HMR]은 핫 모듈 리로드,  어떤 컴포넌트가 업데이트가 되는지 이력을 알려준다.
- [WDS]은 웹팩 데브 서버
- 나중에 웹이 복잡해지면 내용이 많아진다. 유의하자!
```

#### 자바스크립트 이벤트 핸들러 종류

```
onabort
이미지의 다운로드를 중지할 때 (브라우저의 중지버튼)

onactivate
개체가 활성화될 때 발생
(태그의 기능이 작용할 때 발생하는 이벤트로 예를 들어 링크를 누를 경우 링크가 옮겨질때 발생하는 것을 감지하는 이벤트 핸들러)

onafterprint
문서가 출력되거나 혹은 출력하기 위해 출력미리보기를 한 후에 발생

onafterupdate
데이터영역 개체에서 발생하는 이벤트로 데이터 소스 오브젝트내의 데이터가  업데이트 되었을 때 발생(데이터 개체부분 참조)

onbeforeactivate
개체가 활성화 상태로 되기 바로 직전에 발생 (onactivate 참고)

onbeforecopy
선택 영역이 시스템의 클립보드로 복사되기 바로 직전에 발생

onbeforecut
선택 영역이 지워지기 바로 직전에 발생

onbeforedeactivate
부모 문서에서 현재 개체에서 다른 개체로 activeElement가 바뀔 때 발생
(activeElement는 개체를 지칭하는 예약어로도 쓰임)

onbeforeeditfocus
편집가능한 개체 내부에 포함된 개체가 편집활성화된 상태가 되거나 혹은 편집가능한 개체가 제어를 위해 선택될 때

onbeforepaste
시스템의 클립보드에서 문서로 붙여넣기 될 때 대상 개체에서 발생

onbeforeprint
문서가 출력되거나 혹은 출력하기 위해 출력미리보기 직전에 발생

onbeforeunload
페이지가 언로드되기 직전에 발생

onbeforeupdate
데이터영역 개체에서 발생하는 이벤트로 데이터 소스 오브젝트내의 데이터가  업데이트 되기전에 발생 (데이터 개체부분 참조)

onblur
개체가 포커스를 잃었을 때

onbounce
마퀴태그에서 alernate상태에서 스크롤이 양 사이드에서 바운드될 때 발생

oncellchange
데이터 제공 개체에서 데이터가 변화할 때 발생

onchange
개체 혹은 선택영역의 내용이 바뀔 때 발생

onclick
개체위에서 마우스의 왼쪽 버튼을 누를 때 발생

oncontextmenu
클라이언트 영역에서 사용자가 마우스 오른쪽 버튼을 눌러 콘텍스트 메뉴를 열 때 발생

oncontrolselect
사용자가 개체의 제어 영역을 만들 때 발생

oncopy
시스템의 클립보드에 선택영역 혹은 개체를 복사할 때 소스 개체로부터 발생

oncut
시스템의 클립보드에 선택영역 혹은 개체를 잘라낼때 소스 개체로부터 발생

ondataavailable
비정기적으로 데이터를 전달하는 데이터 소스 개체로부터 데이터가 도착할 때마다 정기적으로 발생

ondatasetchanged
데이터 소스개체의 변화에 의해 데이터가 노출된 상태로 될 때 발생

ondatasetcomplete
데이터 소스 개체로부터 모든 데이터가 유용한 상태로 표시될 때 발생

ondblclick
사용자가 개체에 더블클릭 할때 발생

ondeactivate
모 문서에서 현재 개체에서 다른 개체로 activeElement가 변할 때 발생

ondrag
드래그 상태가 지속되는 동안 소스 객체로부터 발생

ondragend
드래그 상태가 끝날 때 소스 객체로부터 발생

ondragenter
사용자가 개체를 드래그하여 드롭가능 위치로 지정된 영역으로 이동할 때 타갯 개체에서 발생

ondragleave
사용자가 개체를 드래그하여 드롭가능 위치로 지정된 영역을 떠날 때 타갯 개체에서 발생

ondragover
사용자가 개체를 드래그하여 드롭가능 위치로 지정된 영역내에서 드래그할 때 계속적으로 타갯 개체에서 발생

ondragstart
선택된 개체 혹은 텍스트 영역에서 사용자가 드래그를 시작할 때 발생

ondrop
드래그앤드롭 작용에서 상태가 진행되는 동안 개체가 타갯 개체에 드롭되었을 때 타갯 개체에서 발생

onerror
개체가 로드되는 동안 발생하는 이벤트

onerrorupdate
데이터 소스 개체 내에 데이터가 없데이트 되는 동안 에러가 발생할 때 데이터 영역 개체에서 발생

onfilterchange
비주얼 필터의 상태가 바뀌거나 트랜지션이 완료되었을 때 발생

onfinish
마퀴개체의 loop가 완료되었을 때 발생

onfocus
개체가 포커스를 받았을 때 발생

onfocusin
개체에 포커스가 셋팅되기 바로 직전 개체에 대해 발생

onfocusout
포커스가 다른 개체로 이동한 후에 포커스를 가고 있는 현재 개체에서 발생

onhelp
브라우저가 활성화 되어 있는 동안 F1키를 눌렀을 때

onkeydown
사용자가 키를 눌렀을 때

onkeypress
기능키를 제외한 키를 눌렀을 때 발생

onkeyup
사용자가 키를 놓았을 때 발생

onlayoutcomplete
소스 문서로 부터 콘텐드를 가지는 객체가 미리보기나 출력을 할때 현제 LayoutRect 개체를 모두 채우는 것이 끝났을 때 발생

onload
브라우저가 개체를 로드한 후에 발생

onlosecapture
개체가 마우스 캡쳐를 잃었을 때 발생

onmousedown
개체 위에 마우스 버튼을 누를 때 발생(좌우 어느 버튼이든)

onmouseenter
개체 안으로 마우스 포인터가 들어올 때 발생

onmouseleave
개체의 경계밖으로 마우스 포인터가 이동할 때 발생

onmousemove
개체위에서 마우스가 움직일 때 발생

onmouseout
개체밖으로 마우스 포인터가 빠져나갈 때 발생

onmouseover
개체위로 마우스 포인터가 들어올 때 발생

onmouseup
마우스가 개체위에 있는 동안 마우스를 누른 상태에서 해제될 때 발생

onmousewheel
마우스 휠이 돌아갈 때 발생

onmove
개체가 움직일 때 발생

onmoveend
개체가 움직임이 끝날 때 발생

onmovestart
개체가 움직이기 시작할 때 발생

onpaste
문서에 클립보드로부터 데이터가 전송될 때 타겟 개체에서 발생

onpropertychange
개체의 속성이 바뀔 때 발생

onreadystatechange
개체의 상태가 변화할 때 발생

onreset
Form 을 사용자가 리셋할 경우 발생

onresize
개체의 크기가 바뀔 때 발생

onresizeend
제어영역에서 개체의 크기가 사용자에 의해 변화가 끝날 때 발생

onresizestart
제어영역에서 개체의 크기가 사용자에 의해 변화되기 시작할 때 발생

onrowenter
데이터 소스 내에서 현재 열이 변화되거나 개체에 새로운 유용한 데이터가 입력될 때 발생

onrowexit
데이터 소스 콘트롤이 개체 내의 현재 열을  변화시킬 때 발생

onrowsdelete
레코드셋에서 열이 삭제될 때 발생

onrowsinserted
현재 레코드셋에 새로운 열이 추가된 후에 발생 (데이터 개체에서)

onscroll
사용자가 개체 내의 스크롤 바를 스크롤할 때 발생

onselect
현재 선택된 영역이 바뀔 때 발생

onselectionchange
문서의 선택 영역의 상태가 바뀔 때 발생

onselectstart
개체가 선택되기 시작할 때 발생

onstart
마퀴개체에서 루프가 매번 시작될 때 발생

onstop
사용자가 stop 버튼을 눌렀을 경우 혹은 페이지를 떠날 때 발생

onsubmit
폼이 전송되기 직전에 발생

onunload
개체가 언로드되기 직전에 발생
```
