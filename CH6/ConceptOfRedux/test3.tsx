// @ : 액션 생성자 함수의 예
function addTodo({ title, priority }) {
    return { type: "todo/ADD", title, priority };
}
function removeTodo({ id }) {
    return { type: "todo/REMOVE", id };
}
function removeAllTodo() {
    return { type: "todo/REMOVE_ALL" };
}
// NOTE: 세 개의 액션 함수 정의, 인수와 함께 호출하면 항상 같은 구조의 액션 객체가 만들어진다.
// NOTE: 나중에 액션 객체의 구조를 변경할 때는 액션 생성자 함수만 수정하면 된다.

store.dispatch(addTodo({ title: "영화보기", priority: "high" }));
store.dispatch(removeTodo({ id: 123 }));
store.dispatch(removeAllTodo());
// NOTE: dispatch 메서드 호출은 액션 생성자 함수 이용
// NOTE: type 속성값은 리듀서에서 액션 객체를 구분할 때도 사용되므로 상수 변수로 만드는 게 좋다.
