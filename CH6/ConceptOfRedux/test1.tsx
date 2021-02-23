// @ : 액션을 발생시키는 예제 코드
store.dispatch({ type: "ADD", title: "영화 보기", priority: "high" });
store.dispatch({ type: "REMOVE", id: 123 });
store.dispatch({ type: "REMOVE_ALL" });
