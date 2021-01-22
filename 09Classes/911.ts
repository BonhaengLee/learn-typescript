// 911.ts
// @ : 1) 열거형 타입을 이용하여 과일 정의
enum Fruit {
    Apple,
    Banana,
    Orange,
}
// @ : 2) 열거형 타입의 원소인 Apple을 값으로 사용
const v1: Fruit = Fruit.Apple;
console.log(typeof v1); // number
// @ : 3) Apple을 타입으로 사용
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;
