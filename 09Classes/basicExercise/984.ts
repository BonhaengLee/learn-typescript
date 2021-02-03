// @ : 984.ts
const arr1 = [10, 20, 30]; // 1
const [n1, n2, n3] = arr1; // 2
arr1.push("a"); // 타입 에러 3

const arr2 = { id: "abcd", age: 123, language: "korean" }; // 4
// const arr2: { id : 'abcd', age: 123, language: 'korean'}; // 4
const { id, age, language } = arr2; // 6
console.log(id === age); // 타입 에러 7
