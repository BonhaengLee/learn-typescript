# Introduction to TypeScript 20.12.18~

#### 2020.12.18

- README.md, helloWorld

  > function hello(string : String)

#### 2020.12.20

- Basic types
  > Number, String, Starks types...
- Interfaces
  > interface Stark 선언해서 printName(stark:Stark), optional(? 이용)

#### 2020.12.21

- Classes
  > 클래스(생성자)
  >
  > - 포장 내용 : 연관 있는 변수와 함수
  > - 기능 : 객체 단위의 코드를 그룹화, 객체 단위의 중복 코드 제거 및 코드의 재사용성
  >
  > 리터럴 방식의 클래스 학습

#### 2020.12.23

- Inheritance
  > 상속(IS-A)
  >
  > 1. 개념 : 상속은 class간의 계층을 만들어서 코드 중복을 줄이는 객체지향 프로그래밍 방법. 상속 관계에는 부모 class와 자식 class라는 개념이 존재하며, class를 상속받는 것은 자식 class가 부모 class의 공개된 속성과 method를 사용할 수 있다는 것을 의미한다. **ts에서 자식 클래스는 1개의 부모 클래스만 상속 가능.**

  ```ts
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    dance() {
      console.log(this.name + " is dancing");
    }
  }

  var bran = new Person("Bran");
  bran.dance();

  class AwesomePerson extends Person {
    dance() {
      console.log("SO AWESOME!");
      super.dance();
    }
  }

  var robb = new AwesomePerson("Robb");
  robb.dance();
  ```

<br></br>
#### 2020.12.23
## 정적 타입 그리고 타입스크립트 // 실전 리액트 프로그래밍
    자바스크립트는 동적 타입 언어다. 따라서 변수의 타입은 런타임에 결정된다. 이와 반대인 정적 타입 언어도 존재한다.  정적 타입 언어는 변수의 타입이 컴파일 타임에 결정된다. 전자는 파이썬, PHP 등이고, 후자는 자바, C++ 등이다.
<br></br>
  ### 9.1 타입스크립트란?
    
    자바스크립트의 모든 기능을 포함하면서 정적 타입을 지원하는 언어다. js에 정적 타입을 지원하는 다른 언어에 비해 ts가 가진 장점을 알아보자.

  #### 9.1.1 동적 타입 언어와 정적 타입 언어
| 동적 타입 언어 | 정적 타입 언어 |
|---|---|
| 타입에 대한 고민을 하지 않아도 되므로 배우기 쉽다. | 변수를 선언할 때마다 타입을 고민해야 하므로 진입 장벽이 높다. |
| 코드의 양이 적을 때 생산성이 높다. | 코드의 양이 많을 때 동적 타입 언어에 비해 생산성이 높다. |
| 타입 오류가 런타임 시 발견된다. | 타입 오류가 컴파일시 발견된다. |  

##### 정적 타입 언어가 생산성이 높은 이유
> 정적 타입 언어의 코드는 타입으로 서로 연결되어 있다. 덕분에 연관된 코드 간 이동이 쉽고, 변수명이나 함수명 변경 등 리팩퍼링도 쉽다. 임포트하지 않고 코드를 작성해도 자동 완성을 쓰거나, 함수 이름과 괄호를 입력하면 함수의 매개변수 종류와 반환값의 타입을 확인할 수 있다. 속성값의 종류가 많은 객체라 하더라도 객체 이름과 점을 입력하면 속성값 목록을 확인할 수 있다.

#### 9.1.2 타입스크립트의 장점
> js의 새로운 표준이 나오거나 확실시되는 기능은 ts에 빠르게 추가된다. jsx 문법과 리액트 컴포넌트의 타입을 정의하는 데 큰 어려움이 없다.  
&nbsp;&nbsp;&nbsp;&nbsp; 다른 경쟁 언어에 비해 큰 생태계를 가지고 있다. 유명한 라이브러리에는 ts의 타입 정의 파일을 가지고 있거나, DifinitelyTyped라는 깃허브 저장소에 포함되어 있다.  
&nbsp;&nbsp;&nbsp;&nbsp; ts는 ms에서 개발하고 있는 IDE인 vscode와 궁합이 잘 맞는다. 특별한 설정 없이도 ts 파일의 타입 검사를 자동으로 실행한다. 또한 ts를 이용해 js 파일도 타입 검사를 하기 때문에 레거시 프로젝트에서도 유용하다.

<br></br>
#### 9.1.3 실습을 위한 준비
```ts
let v1 = 123; // 1
v1 = 'abc' // 2 타입 에러
```
1 : 변수 v1에 마우스를 올려 놓으면 let v1 : number라는 문구가 보인다. ts는 v1의 타입이 숫자라는 것을 알고 있다.  
2 : 타입이 숫자인 변수에 문자열을 입력하면 컴파일 타임에 에러가 발생한다. 코드 실행 전에 타입 에러를 알 수 있다.  

> 이렇게 자동으로 타입을 인식하는 기능을 타입 추론(type inference)이라고 한다. 기존의 js 코드를 크게 변경하지 않고도 ts를 쉽게 적용하도록 해준다.

<br></br>
##### 타입스크립트에서 타입을 선언하는 방법

```ts
let v1 : number | string = 123; // 1
v1 = 'abc' // 2
```

1 : v1을 숫자나 문자열 타입으로 정의  
2 : v1은 문자열도 포함하므로 에러가 발생하지 않음
<br></br>

### 9.2 타입스크립트의 여러 가지 타입
#### 9.2.1 타입스크립트의 다양한 타입
```ts
const size: number  = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? '크다' : '작다';

const values: number[] = [1,2,3]; // 1 
const values2: Array<number> = [1,2,3]; // 1
values.push('a'); // 2 타입 에러

const data: [string, number] = [msg, size]; // 3
data[0].substr(1);
data[1].substr(1); // 4 타입 에러
```

1 : 베열은 두 가지 방법으로 정의할 수 있다.  
2 : 숫자 배열에 문자열을 입력하면 타입 에러 발생  
3 : 문자열과 숫자로 구성된 튜플 타입을 정의  
4 : 두 번째 아이템의 타입은 숫자인데 문자열의 메서드를 호출하면 타입 에러 발생
<br></br>

#### null과 undefined 타입
> js에서 값으로 존재하는 null과 undefined는 ts에서 각자 타입으로 존재한다.
```ts
let v1: undefined = undefined; // 1
let v2: null = null; // 1
v1 = 123; // 2 타입 에러

let v3: number | undefined = undefined; // 3
v3 = 123;
```

1 : undefined와 null은 타입으로 사용될 수 있다.  
2 : undefined 타입에 숫자를 입력하면 타입 에러가 발생한다.  
3: undefined와 null 타입은 다른 타입과 함께 유니온 타입으로 정의할 때 많이 사용된다.
<br></br>

#### 문자열 리터럴과 숫자 리터럴 타입
> ts에서는 문자열 리터럴과 숫자 리터럴을 타입으로 정의할 수 있다.
```ts
let v1: 10 | 20 | 30; // 1
v1 = 10;
v1 = 15; // 2 타입 에러

let v2: '경찰관' | '소방관'; // 3
v2 = '의사'; // 타입 에러
```

1 : 숫자 10, 20, 30은 각각 타입으로 사용됐다. 변수 v1은 오직 숫자 10, 20, 30만 가질 수 있는 타입으로 정의된다.  
2 : 숫자 10, 20, 30이 아닌 다른 숫자는 입력될 수 없다.  
3 : 변수 v2를 문자열 리터럴 타입으로 정의했다.

<br></br>

#### any 타입
> any 타입은 모든 종류의 값을 허용하는 타입이다.
```ts
let value: any;
value = 123;
value = '456';
value = () => {};
```  

> any 타입에는 숫자와 문자열뿐만 아니라 함수도 입력될 수 있다. any 타입은 기존의 js 코드로 작성된 프로젝트를 ts로 포팅하는 경우 유용하다. 기존 프로젝트의 모든 코드에 타입을 한번에 정의하는 것은 부담되기 때문에 타입 에러가 나는 부분은 임시로 any 타입으로 정의하면 된다.  
&nbsp;&nbsp;&nbsp;&nbsp; any 타입은 실제로 타입을 알 수 없는 경우나 정의가 안된 외부 패키지를 사용하는 경우에도 사용하기 좋다. 단, any 타입을 남발하면 ts를 사용하는 의미가 퇴색된다.  

#### void와 never 타입  
> 아무 값도 반환하지 않고 종료되는 함수의 반환 타입은 void로 정의할 수 있다.  
그리고 항상 예외가 발생해서 비정상적으로 종료되거나 무한 루프 때문에 종료되지 않는 함수의 반환 타입은 never 타입으로 정의할 수 있다.

```ts
function f1(): void { // 1
  console.log('hello');
}
function f2(): never { // 2
  throw new Error('some error');
}
function f3(): never { // 3
  while (true) {
    /// ...
  }
}
```

1 : 아무 값도 반환하지 않으므로 void로 정의했다.  
2 : 함수가 항상 비정상적으로 종료되므로 never 타입으로 정의했다.  
3 : 함수가 종료되지 않으므로 never 타입으로 정의했다.  
<br></br>

#### object 타입
> object 타입은 js에서 일반적으로 사용되는 객체의 타입이다.
```ts
let v: object;
v = { name: 'abc'};
console.log(v.prop1); // 1 타입 에러
```

1 : 객체의 속성에 대한 정보가 없기 때문에 특정 속성값에 접근하면 타입 에러가 발생한다. 속성 정보를 포함해서 타입을 정의하기 위해서는 뒤에서 설명하는 인터페이스(interface)를 사용해야 한다.
<br></br>

교차 타입과 유니온 타입 $ 
> 여러 타입의 교집합과 합집합을 각각 교차(intersection) 타입과 유니온(union) 타입으로 표현할 수 있다. 교차 타입은 & 기호로 정의하고, 유니온 타입은 | 기호로 정의한다.
```ts
let v1: (1 | 3 | 5) & (3 | 5 | 7); // 1
v1 = 3;
v1 = 1; // 2 타입 에러
```

1 : 변수 v1의 타입은 3 | 5 와 같다.   
2 : 변수 v1 에는 3 또는 5가 아닌 값을 할당할 수 없다.
<br></br>

#### type 키워드로 타입에 별칭 주기
> 타입 별칭은 타입을 선언할 때 편리하게 사용할 수 있다.
```ts
type Width = number | string; // 1
let width: Width; // 2
width = 100;
width = '100px';
```

1 : number | string 타입에 Width라는 별칭을 부여한다.  
2 : Width는 일반적인 타입처럼 사용될 수 있다.
<br></br>

### 9.2.2 열거형 타입