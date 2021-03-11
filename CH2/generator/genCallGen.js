function* g1() {
    yield 2;
    yield 3;
}
function* g2() {
    yield 1;
    // @ : 제네레이터함수에서 다른 제네레이터함수 호출, yield* 오른쪽은 반복 가능한 객체가 오도록 설계
    yield* g1();
    yield 4;
}
console.log(...g2()); // 1 2 3 4 
