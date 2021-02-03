// @ : 985.ts
// 1
interface Person {
    name: string;
    age: number;
}

interface Korean extends Person {
    liveInSeoul: boolean;
}

interface Japanese extends Person {
    liveInTokyo: boolean;
}

const p1: Person = { name: "mike", age: 23 };
const p2: Korean = { name: "mike", age: 25, liveInSeoul: true };
const p3: Japanese = { name: "mike", age: 27, liveInTokyo: false };
const arr1 = [p1, p2, p3]; // 2
const arr2 = [p2, p3]; // 3
