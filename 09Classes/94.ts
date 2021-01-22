// 94.ts
// @ : 1) undefined와 null은 타입으로 사용될 수 있다.
let v1: undefined = undefined;
let v2: null = null;
v1 = 123; // @ : 타입 에러 2) undefined 타입에 숫자를 입력하면 타입 에러

// @ : 3) undefined와 null 타입은 다른 타입과 함께 유니온 타입으로 정의할 때 많이 사용
let v3: number | undefined = undefined;
v3 = 123;
