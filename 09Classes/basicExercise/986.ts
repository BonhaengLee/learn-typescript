// @ : 986.ts
// 1
function func1(a = "abc", b = 10) {
    return `${a} ${b}`;
}

func1(3, 6); // 타입 에러 2
const v1: number = func1("a", 1); // 타입 에러 3

function func2(value: number) {
    if (value < 10) {
        return value;
    } else {
        return `${value} is too big`;
    }
}
