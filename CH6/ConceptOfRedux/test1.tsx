// @ : 액션을 발생시키는 예제 코드
// @ : 각 액션은 고유한 type 속성값을 사용해야 하는데 ADD라는 단어는 중복 가능성이 높다. 접두사를 써야한다.
store.dispatch({ type: "ADD", title: "영화 보기", priority: "high" });
store.dispatch({ type: "REMOVE", id: 123 });
store.dispatch({ type: "REMOVE_ALL" });
