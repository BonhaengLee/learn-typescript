// 961.ts
// 1
function makeArray<T>(defaultValue: T, size: number): T[] {
    // 2
    const arr: T[] = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
// 3
const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>("empty", 10);
// 4
const arr3 = makeArray(1, 10);
const arr4 = makeArray("empty", 10);
