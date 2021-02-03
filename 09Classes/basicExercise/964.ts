// // 964.ts
// // 1
// interface Person {
//     name: string;
//     age: number;
// }
// interface Korean extends Person {
//     liveInSeoul: boolean;
// }
// // 2
// function swapProperty<T extends Person, K extends keyof Person>(
//     p1: T,
//     p2: T,
//     name: K
// ): void {
//     const temp = p1[name];
//     p1[name] = p2[name];
//     p2[name] = temp;
// }

// const p1: Korean = {
//     name: "홍길동",
//     age: 23,
//     liveInSeoul: true,
// };
// const p2: Korean = {
//     name: "김삿갓",
//     age: 31,
//     liveInSeoul: false,
// };
// // 3
// swapProperty(p1, p2, "age");
