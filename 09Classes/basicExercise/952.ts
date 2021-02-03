// 952.ts
function func1(a: number, b: number | string) {
    const v1: number | string = a; // 1
    const v2: number = b; // 타입 에러 2
}
function func2(a: 1 | 2) {
    const v1: 1 | 3 = a; // 타입 에러 3
    const v2: 1 | 2 | 3 = a; // 4
}
