// 965.ts
interface Product {
    name: string;
    price: number;
}
const p1: Product = {
    name: "시계",
    price: 1000,
};
const p2: Product = {
    name: "자전거",
    price: 2000,
};
swapProperty(p1, p2, "name"); // 타입 에러 1
