// 958.ts
function addOne(value: number) {
    return value + 1;
}
const result = [1, 2, 3].map<number>(addOne); // 1
// (value: number, index: number, array: number[]) => number // 2
