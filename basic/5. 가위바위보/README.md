## 가위바위보

### 이벤트 처리 함수 작성하기

#### 클래스 필드를 이용해 이벤트 처리 메서드 작성하기

```
- 클래스 필드를 이용해서 이벤트 처리 메서드를 작성하면 함수에 바인딩을 적용하면서
렌더링 성능과 가독성이 좋아진다.

예시)

class App extends Component {
    onClickHello = e => {
        e.preventDefault();
        console.log('hello World);
    }
    onClickDec = () => {
        const {count} = this.state;
        this.setState = ({ conut : count -1 })
    }
    render(){
        return (
            <>
                <div>
                    <button onClick={this.onClickHello} />
                    <button onClick={this.onClickDec} />
                </div>
            </>
        )
    }
}

(설명)

- 화살표 함수를 사용했기 때문에 this 객체는 자동으로 바인딩 된다.
- 클래스 필드는 표준이 될것이 거의 확실하다. 바벨의 도움을 받는다.
- 가장 보편적인 사용방법이다. 클래스 컴포넌트 작성 시 이벤트 핸들러를 등록할때,
렌더링 부분에 인라인 방식으로 등록하고, 렌더링 함수 밖으로 함수를 빼내어 가독성을
높이는 방법
```

#### 이벤트 처리 함수에 값 전달하기

```
- 함수생성으로 매개변수 전달하는 방법

예시)

class App extends Component {
    state = {
        selectedName : 'mike';
    }
    onClick = selectedName => {
        this.setState({selectedName});
    }
    render(){
        return (
            <>
                <div>
                    <button onClick={() => this.onClick('mike')}>mike</button>
                    <button onClick={() => this.onClick('jone')}>jone</button>
                </div>
            </>
        )
    }
}

(설명)

- 이벤트 처리 함수가 호출될때 특정 값을 전달해야 하는 경우가 종종 발생하는데,
위 코드 처럼 onClick={() => this.onClick('jone')} 랜더함수에서 함수를 생성한다.

(다른 방법 예시)

class App extends Component {
    state = {
        selectedName : 'mike';
    }
   onClick = selectedName => () =>{
        this.setState({selectedName});
    }
    render(){
        return (
            <>
                <div>
                    <button onClick={(this.onClick('mike')}>mike</button>
                    <button onClick={this.onClick('jone')}>jone</button>
                </div>
            </>
        )
    }
}

(설명)
onClick={() => this.onClick('jone')} => onClick={(this.onClick('mike')}
onClick = selectedName => {this.setState({selectedName});}
=>
onClick = selectedName => () =>{this.setState({selectedName});}

고차함수를 이용하여 렌더링 안에서는 간결하게 바뀌었고, 밖에서 함수가 함수를 반환하는
패턴으로 바뀌었다.
```

#### 함수형 컴포넌트에서 생명 주기 함수 이용하기 : useEffect

```
- Hooks는 라이프 사이클을 가지고 있지 않고 흉내를 낸다.

- useEffect 훅을 통해서 함수형 컴포넌트에서도 생명 주기 함수를
이용할 수 있다.

- 클래스형 컴포넌트의 각 생명 주기 메서드에 일대일로 대응하는 훅이
있는 것은 아니다.

- useEffect 훅을 이용하면 class 라이프사이클 메소드와 비슷한 기능을 한곳으로 모을 수 있어서 가독성이 좋다.

- useEffect(() => {
    // componentDidMount() 와 componentDidUpdate() 역할 (1대1 대응은 아님)
    return () => {
    // componentWillUnmount 역할
    }
} , [] // 2번째 매개변수)

- useEffect의 2번째 매개변수 :
useEffect 훅에 입력된 함수는 렌더링 할 때마다 호출되기 때문에,
API 통신을 불필요하게 많이 하게 된다.
이를 방지하기 위해 useEffect 훅의 두번째 매개변수로 배열을 입력하면,
배열의 값이 변경되는 경우에만 함수가 호출된다.

- state마다 다른 effect를 내고 싶을 때가 있기때문에, 각각의 state에 대한 useEffect도 여러번 사용할 수 있다.

- class의 경우 componentDidMount나 componentDidUpdata에서 모든 state를 조건문으로 분기 처리한다.

- 두번째 매개변수 배열에는 꼭 useEffect를 다시 실행할 값만 넣어야 한다.
관련없는 state를 넣지 말아햐 한다는 뜻

- state에 3개 데이터가 있다면, class에서는 3개의 데이터가 한번에 묶인다면,
hooks에서는 1개, 2개, 3개 여러가지 경우의 수로 묶일 수 있다.
```

#### 라이프사이클 : componentDidMount, componentWillUnMount, componentDidUpdate

```
- 리액트가 돔에 붙일때, 그 순간 동작(기능)을 넣을 수 있다.

- componentDidMount : 컴포넌드가 첫 랜더링 된 후,
첫 랜더링이 성공적으로 수행됬다면 componentDidMount가 실행된다.
다음 랜더링에서는 실행 되지 않는다.
** 비동기 요청을 많이 한다!

- componentWillUnMount : 컴퍼넌트가 제거되기 직전,
componentDidMount에서 수행한 기능을 제거하는 용도로 사용된다.
부모 컴포넌트가 자식 컴포넌트를 없앴때 사용.
비동기 요청이 있다면 비동기 요청 정리를 많이 한다.

- 클래스 컴포넌트 작성 시에 render() 함수안에 setState를 넣으면 안된다!
무한렌더링에 빠진다.

- componentDidUpdate : 리 랜더링 후


```

#### componentDidMount 메서드

```
- componentDidMount 메서드는 render 메서드의 첫번째 반환값이 실제 돔에
반영된 직후 호출된다.

- 따라서 render 메서드에서 반환한 리액트 요소가 돔에 반영 되어야 알 수 있는
값을 얻을 수 있다.

- componentDidMount 메서드는 API 호출을 통해 데이터를 가져올때 적합하다.
setState 메서드가 마운트 이후에만 동작하기 때문이다.

- componentDidMount 메서드에서 setState 메서드를 호출하면 다시 렌더링된다.

- 응답속도에 민감한 app이 아니라면 componentDidMount 메서드에서 API를
호출하는 것은 탁월한 선택이라 할 수 있다.
```

#### componentWillUnMount

```
- componentWillUnMount 메서드는 소멸 단계에서 호출되는 유일한 생명주기
메소드다.

- 끝나지 않은 네트워크 요청을 취소, 타이머 해제, 구독 해제 등의 작업을 하기 좋다.

- 컴포넌트에서 componentDidMount 메소드가 호출되면 componentWillUnMount 메서드도
호출되는 것이 보장된다.

- 따라서 componentDidMount => 구독 componentWillUnMount => 구독 해제
```

#### Class Life Cycle

```
클래스의 경우 -> constructor(생성자) -> render -> (ref) -> componentDidMount
-> setState/props 바뀔때 리랜더링 -> shouldComponentUpdate(true) -> render -> componentDidUpdate
-> 부모가 나를 없앴을때 -> componentWillUnMount -> 소멸
```

#### setInterval

```
- setInterval 함수와 setTimeout 함수는 주기적인 작업을 실행하기 위한 함수 이다.

- setInterval 함수는 일정한 시간 간격으로 작업을 수행하기 위해서 사용한다.
clearInterval 함수를 사용하여 중지 한다.

- settimeout 함수는 일정한 시간 이후에 작업을 한번 실행한다.
clearTimeout 함수를 사용하여 중지한다.

- clearInterval 함수 와 clearTimeout 함수는 실행중인 작업을 중지시키는 것이 아니다.
지정된 작업은 모두 비동기로 실행되고 다음 작업 스케쥴이 중지 되는 것이다.
```

#### Class component (비동기 요청)

```
- componentDidMount()에서 비동기 작업을 했으면, componentWillUnmount()에서
완료되지 않은 비동기 작업을 정리해 주어야 한다.

- 비동기함수 밖에 할당된 변수를 비동기함수 안에서 참조하게 되면 클로저가 발생한다.
```
