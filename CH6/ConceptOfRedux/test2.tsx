// @ : 액션 타입을 유일한 값으로 만들기 위해 접두사 이용하기
sotre.dispatch({ type: "todo/ADD", title: "영화 보기", priority: "high" });
sotre.dispatch({ type: "todo/REMOVE", id: 123 });
sotre.dispatch({ type: "todo/REMOVE_ALL" });
// NOTE: dispatch 메서드를 호출할 때 직접 액션 객체를 입력하는 방법은 사용하지 않는다.
// NOTE: 'todo/ADD'의 액션의 경우 title, priority라는 두 속성값이 항상 존재하도록 강제할 필요가 있다. 액션 생성자 함수 사용
