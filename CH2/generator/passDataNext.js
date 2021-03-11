function* f1(){
  // @ : next를 통해 전달된 인수는 yield 키워드의 결괏값으로 받을 수 있다.
  const data1 = yield;
  console.log(data1) // 10
  const data2 = yield;
  console.log(data2); // 20
}
const gen = f1();
// @ : 첫 번째 next 호출은 제네레이터 함수의 실행이 시작되도록 하는 역할
gen.next();
// @ : next의 인수로 전달
gen.next(10);
gen.next(20);