// @ : 액션 타입을 유일한 값으로 만들기 위해 접두사 이용하기
sotre.dispatch({ type: "todo/ADD", title: "영화 보기", priority: "high" });
sotre.dispatch({ type: "todo/REMOVE", id: 123 });
sotre.dispatch({ type: "todo/REMOVE_ALL" });
