// 935.ts
// 1
function add(x: number, y: number): number;
function add(x: string, y: string): string;
// 2
function add(x: number | string, y: number | string): number | string {
    // ...
}
const v1: number = add(1, 2); // 3
console.log(add(1, "2")); // 타입 에러 4
