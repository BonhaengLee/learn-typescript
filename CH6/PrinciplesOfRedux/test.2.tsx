// @ : 시간 함수를 이용하면 순수 함수가 아니다.
// @ : sayHello1 함수는 내부적으로 시간함수를 호출하므로 순수 함수가 아니다. 
// NOTE: 홍길동님 안녕하세요. 지금은 11시 30분입니다.
sayHello1("홍길동");
sayHello2("홍길동", "11:30");