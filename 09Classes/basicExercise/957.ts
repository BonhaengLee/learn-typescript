// 957.ts
type F1 = (a: number, b: string) => number;
type F2 = (a: number) => number;
type F3 = (a: number) => number | string;
let f1: F1 = (a, b) => 1;
let f2: F2 = (a) => 1;
let f3: F3 = (a) => 1;
f1 = f2;
f2 = f1; // 타입 에러 1
f2 = f3; // 타입 에러 2
