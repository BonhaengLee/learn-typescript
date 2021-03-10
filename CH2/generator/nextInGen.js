function* f1() {
    console.log("f1-1");
    yield 10;
    console.log("f1-2");
    yield 20;
    console.log("f1-3");
    return "finished";
}
// @ : 제네레이터 실행하면 제네레이터 객체만 반환되고 실제로 함수 내부 코드 실행되지 않음, 따라서 첫 로그 출력 X
const gen = f1();
// @ : next를 호출하면 yield를 만날 때까지 실행되고 데이터 객체를 반환, 아래의 f1-1
// @ : yield를 만나면 done은 거짓이 되고 만나지 못하면 참이 된다. yield의 오른쪽 값이 value로 넘어온다.
console.log(gen.next());
console.log(gen.next());
// @ : yield를 만나지 못했으니 done은 참이된다. return이 최상단이면 첫 next의 done이 참이 될 것.
console.log(gen.next());
// f1-1
// { value: 10, done: false}
// f1-2
// { value: 20, done: false}
// f1-3
// { value: 'finished', done: true}

// NOTE: 제네레이터가 next를 가진다는 것은 반복자(iterator)임을 뜻한다.
