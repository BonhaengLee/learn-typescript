const gen = f1();
console.log(gen.next());
// @ : return을 호출하면 done은 참이 된다.
console.log(gen.return("abc"));
// @ : 이후 next를 호출해도 done은 참이 된다.
console.log(gen.next());
// f1-1
// { value: 10, done: false}
// { value: 'abc', done: true}
// { value: undefined, done: true}
