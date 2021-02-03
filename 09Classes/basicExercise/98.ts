let v: object;
v = { name: "abc" };
console.log(v.prop1); // @ : 타입 에러 1) 객체의 속성에 대한 정보가 없기 때문에 접근하면 타입에러가 발생한다.
// @ : 속성 정보를 포함해서 타입 정의하기 위해서 interface를 사용해야 한다.