// @ : 자연수의 집합을 제네레이터 함수로 표현. 제네레이터 함수가 아니면 프로그램이 먹통이 됨
function* naturalNumbers() {
    let v = 1;
    while (true) {
        yield v++;
    }
}
// @ : 1~6까지만 연산에 사용됨
const values = naturalNumbers();
const result = take(
    3,
    map(
        filter(values, (n) => n % 2 === 0),
        (n) => n * 10
    )
);
console.log([...result]);
