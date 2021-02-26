// @ : 순수 함수는 테스트 코드를 작성하기 쉽다.
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
// @ : 내부적으로 현재 시각을 사용하므로 테스트 코드에서도 현재시각을 가져와야한다. 하지만 이 시점이 달라 번거롭다.
expect(sayHello1("홍길동")).toBe(
    `홍길동님 안녕하세요. 지금은 ${hour}시 ${minute}분입니다.`
);

expect(sayHello2("홍길동", "11:30")).toBe(
    "홍길동님 안녕하세요. 지금은 11시 30분입니다."
);
