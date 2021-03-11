function* f1(){
  // ...
}
const gen = f1()
console.log(gen[Symbol.iterator]() === gen); // true : 호출한 결과가 자기자신이므로 반복자