// NOTE: actions.ts 파일에는 액션들의 문자열 타입과 액션 생성 함수들을 선언
import { createAction } from 'typesafe-actions';

// 액션 type
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
