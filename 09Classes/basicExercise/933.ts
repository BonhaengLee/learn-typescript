// 933.ts
interface String { // 1
  getParam(this: string, index: number) : string;

}
String.prototype.getParam = getParam; // 2
console.log('asdf, 1234, 0k '.getParam(1)); // 3