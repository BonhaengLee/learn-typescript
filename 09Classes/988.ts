// 988.ts
function print(value: number | string) {
    if (typeof value === "number") {
        // 1
        console.log((value as number).toFixed(2));
    } else {
        // 2
        console.log((value as string).trim());
    }
}
