// 923.ts
import getEnumLength from "./917";

const enum Fruit {
    Apple,
    Banana,
    Orange,
}
// @ : 타입 에러 1) 열거형 타입을 상수로 정의하면 열거형 타입의 객체를 사용할 수 없다.
console.log(getEnumLength(Fruit));
