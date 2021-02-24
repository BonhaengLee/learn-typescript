// @ : 액션 타입은 변수로 만들어 관리한다.
// @ : type이름을 상수로 만듦, 리듀서에도 필요하므로 export
export const ADD = "todo/ADD";
export const REMOVE = "todo/REMOVE";
export const REMOVE_ALL = "todo/REMOVE_ALL";
// @ : 액션 생성자 함수 외부 호출해야하므로 노출
export function addTodo({ title, priority }) {
    return { type: ADD, title, priority };
}
export function removeTodo({ id }) {
    return { type: REMOVE, id };
}
export function removeAllTodo() {
    return { type: REMOVE_ALL };
}
