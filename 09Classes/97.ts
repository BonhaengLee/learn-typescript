// @ : 1) 아무 값도 반환하지 않음 void
function f1(): void {
    console.log("hello");
}
// @ : 2) 함수가 비정상적으로 종료되므로 never
function f2(): never {
    throw new Error("some error");
}
// @ : 3) 함수가 종료되지 않으므로 never
function f3(): never {
    while (true) {
        // ...
    }
}
