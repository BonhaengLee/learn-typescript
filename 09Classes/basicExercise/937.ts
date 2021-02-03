// 937.ts
// 1
interface Param {
    name: string;
    age?: number;
    language?: string;
}
// 2
function getInfoText({ name, age = 15, language }: Param): string {
    // ...
}
