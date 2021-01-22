// 919.ts
import isValidEnumValue from "./918";
import getEnumLength from "./917";

enum Fruit {
    Apple,
    Banana,
    Orange,
}

enum Language {
    Korean = "ko",
    English = "en",
    Japanese = "jp",
}

console.log(getEnumLength(Fruit), getEnumLength(Language));
// @ : 3 3 1) 열거형 타입 원소 개수 출력
console.log("1 in Fruit:", isValidEnumValue(Fruit, 1));
// @ : 2) 열거형 타입에 존재하는 값이 맞는지 검사
// @ : true
console.log("5 in Fruit:", isValidEnumValue(Fruit, 5));
// @ : false
console.log("ko in Language:", isValidEnumValue(Language, "ko"));
// @ : true
console.log("Korean in Language:", isValidEnumValue(Language, "Korean"));
