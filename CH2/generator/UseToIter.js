function* f1() {
    yield 10;
    yield 20;
    yield 30;
}
// @ : for of 문은 반복 가능한 객체로부터 반복자를 얻는다. 반복자의 next를 호출하면서 done이 참이 될 때까지 반복
for (const v of f1()) {
    console.log(v);
}
// @ : 전개 연산자도 done이 참이 될때까지 반복
const arr = [...f1()];
console.log(arr); // [ 10, 20, 30 ]
