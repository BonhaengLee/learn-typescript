// 963.ts
// 1
function identity<T extends number | string>(p1: T): T {
    return p1;
}
// 2
identity(1);
identity("a");
identity([]); // 타입 에러 3
