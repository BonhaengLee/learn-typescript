// 929.ts
function getInfoText(
    name: string,
    age: number = 15, // 1
    language = "korean" // 2
): string {
    // ...
}
// 3
console.log(getInfoText("mike"));
console.log(getInfoText("mike", 23));
console.log(getInfoText("jone", 36, "english"));

const f1: (
    // 4
    name: string,
    age?: number,
    language?: string
) => string = getInfoText;
