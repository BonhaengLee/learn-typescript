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
