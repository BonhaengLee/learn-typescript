// 93.ts
const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? "크다" : "작다";

// @ : 1) 배열은 두 가지로 정의할 수 있다.
const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
values.push('a'); // @ : 타입 에러 2) 숫자 배열에 문자열로 입력하면 타입 에러

// @ : 3) 문자열과 숫자로 구성된 튜플 타입 정의
const data: [string, number] = [msg, size]; 
data[0].substr(1);
data[1].substr(1); // @ : 타입 에러 4) 두 번째 아이템의 타입은 숫자인데 문자열의 메서드를 호출하면 타입 에러