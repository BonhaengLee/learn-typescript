// @ : 제네레이터 내부에서 반복 가능한 객체 이용, 세 함수는 새로운 배열 객체를 만들지 않는다. 연산이 필요한 순간에만 함수가 실행된다.
function* map(iter, mapper) {
    for (const v of iter) {
        yield mapper(v);
    }
}

function* filter(iter, test) {
    for (const v of iter) {
        if (test(v)) {
            yield v;
        }
    }
}

export default function* take(n, iter) {
    for (const v of iter) {
        if (n <= 0) return;
        yield v;
        n--;
    }
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// @ : 함수를 호출하면 제네레이터 객체만 생성되고 실제 연산이 수행되진 않는다.
const result = take(
    3,
    map(
        filter(values, (n) => n % 2 === 0),
        (n) => n * 10
    )
);
// @ : 값이 필요한 순간에 제네레이터 객체를 통해서 다음 값을 요청한다. 이렇게 필요한 순간에만 연산하는 것이 지연 평가(lazy evaluation)
console.log([...result]); // [ 20, 40, 60 ]

// @ : gen은 필요한 연산만 수행된다는 점. values의 모든 값이 연산에 사용되지는 않는다. 1~6까지 연산 후 take 종료
