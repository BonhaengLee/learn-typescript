// // 924.ts
// function getInfoText(name: string, age: number): string {
//     // 1
//     const nameText = name.substr(0, 10); // 2
//     const ageText = age >= 35 ? "senior" : "junior"; // 3
//     return `name : ${nameText}, age: ${ageText}`;
// }
// const v1: string = getInfoText("mike", 23);
// const v2: string = getInfoText("mike", "23"); // 타입 에러 4
// const v3: number = getInfoText("mike", 23); // 타입 에러 5
