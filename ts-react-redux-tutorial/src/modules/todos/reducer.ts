import { TodosState, TodosAction } from './types';
import { createReducer } from 'typesafe-actions';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';
// NOTE: 초기 상태와 리듀서 코드
const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해우기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

// ❤ : 3. 리듀서 createReducer 로 구현하기
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map((todo) => todo.id)) + 1,
      text,
      done: false,
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter((todo) => todo.id !== id),
});

export default todos;
