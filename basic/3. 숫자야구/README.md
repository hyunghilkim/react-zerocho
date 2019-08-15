### 숫자야구

#### 비구조화 할당 / 구조 분해 할당

```
- 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 변수에 담을수 있게 하는 표현식이다.
- 구조 분해 할당이란, 배열이나 객체의 값을 새로운 변수에 쉽게 할당한다.
ES6이전에는 변수하나에 값 하나를 일일히 할당해야 했으나 ES6부터는 비구조화 할당을 통해 쉽게 할당할수 있음.
- 배열 구조 분해 할당, 객체 구조 분해 할당이 있다.
- 변수값 교환하기가 임시변수(temp)없이 쉽게 된다.
- 함수는 배열을 반환할 수 있다.
```

#### 구조 분해 할당 간단 설명

```
설명섹션
객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들 수 있습니다.

var x = [1, 2, 3, 4, 5];
구조 분해 할당의 구문은 위와 비슷하지만, 대신 할당문의 좌변에서 사용하여, 원래 변수에서 어떤 값을 분해해 할당할지 정의합니다.

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2

구조 분해 할당은 Perl이나 Python 등 다른 언어가 가지고 있는 기능입니다.
```

[구조분해할당]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment")

#### 모듈 시스템 (export, import , require, export default)

```
- export문은 js모듈에서 함수, 객체, 원시 값을 내보낼때 사용한다. 내보낸 값은 다른 파일,프로그램에서 import문으로 가져가 쓸수 있다.
- 내보내기에는 named 내보내기와 default 내보내기 가 있다.
- named 내보내기는 모듈하나, 한 파일에서 이름있는 변수, 함수, 클래스를 이름이 중복되지 않는 한 여러 이름있는 것들을 내보낼수 있다.
- named 내보내기는 var, let, const를 사용한다.
- default 내보내기는 하나의 모듈에서 한 번만 사용할 수 있다. 즉 한 파일에서는 하나의 값만 default로 정의 할 수 있다.
- default 내보내기에는 var, const, let을 사용 할 수 없다.
- export되는게 객체나 배열이면 구조 분해할수 있다.
```

[export]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export")
[import]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import")

#### input 태그 활용

```
<input value={this.state.value} onChange={onChangeinput}> 속성 value와 onChange는 한 세트이다.
이게 아니라면,
<input defaultValue={this.state.value}> 이걸 써야함.
```

#### class 콤포넌트에서 constructor(생성자) 사용 안하는 방법 (부제 : 화살표함수)

```
- 생성자를 사용해도 되지만, 코드 간결성을 위해서 사용을 안해도 된다.
- 클래스안에 생성자 선언없이 바로 state={} 사용
- 클래스안에 메소드 선언 시에 화살표함수를 사용하여 선언한다. 안그러면 생성자를 만들어야 한다.
- 클래스안에 메소드 선언 시 자료형(x) 함수 이름 = () => {}
```

#### 리액트 반복문

```
- 리액트가 반복문이 vue보다 어려움
- map() 메소드 사용, key속성을 필수로 사용 key={값} 값은 유니크 해야 한다.
- 배열.map( (요소,인덱스) => { return ( <li key={유니크값}>{요소}</li> ) } )
- key={인덱스} 를 하게되면, 유니크 하지만 성능 최적화에 문제가 되서 사용하지 말아야 한다.
- 요소가 추가만 되는 배열인 경우 key={인덱스}를 사용해도 되긴하지만, 삭제는 안된다. 가급적 사용하지 말자.
- key정하는 일이 쓸데없이 귀찮은 일이다.
- 화살표 함수는 return 생략 가능하다. 리턴과 중괄호 생략하면 (=> 기준으로 오른쪽) 식이 바로 리턴된다.
```

#### props

```
- props는 부모컴포넌트가 자식컴포넌트에게 데이터를 전달하는 방법이다.
- <html attribute=""><html> html에서 태그 속성은 attribute라고 한다. //빌트인 태그
- <Component value={} , index={}> 사용자 정의 태그에서 value 와 index는 리액트에서 props라고 한다.
- 사용자정의 태그 Component.jsx에서 value와 index를 읽고 싶을때는 this.props.value , this.props.index 이렇게 받는다.
- props로는 데이터를 자유롭게 전달할 수 가 없다. 고조할아버지가 손자한테 내가 할아버지한테 자유롭게 데이터를 전달하기 위해서
리덕스 , mobx , context API 등을 사용한다.
```

#### 메서드 바인딩 (부제 : 화살표 함수)

```
- 화살표함수 사용하지않고 그냥 함수 선언을 하게되면 함수{}부분에서 this를 사용할 수 없다 => this 가 undefind
- 리액트 오래전 버전에서는 생성자 선언하고 생성자 안에 this 바인딩 하는 코드가 들어있었다. 사람들이 불편해 했음
- 바벨의 새로운 기능 도입으로 화살표 함수를 사용하게 되면 생성자 안에서 하는 메서드 바인딩(bind.this)을 생략 할 수 있게 되었다.
```

#### 리액트 렌더링

```
- 리액트는 과거 state와 현재 업데이트된 state를 비교하여 다를때, 렌더링을 해준다.
- 리액트에서는 state관련 로직에서 push를 사용하면 안된다.
예를 들어,

const arr = []
arr.push(1)
>>> 1
arr === arr
>>> true
이렇게 하면 바뀐게 없기때문에 리액트가 수정사항을 감지하지 못하기에 렌더링을 수행하지 않는다.

const arr1 = []
const arr2 = [...arr1 , 1]
arr2
>>> [1]
arr1 === arr2
>>> false
어 달라졌네? 리액트가 변화를 감지하여 렌더링을 수행한다.
```
