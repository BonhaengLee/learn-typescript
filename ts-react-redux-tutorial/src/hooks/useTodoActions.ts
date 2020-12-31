// ❤ : 할 일의 상태를 토글하는 함수와 할 일을 제거하는 함수를 제공해줌
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../modules/todos';

export default function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]); // NOTE: useCallback은 함수 재생성하지 않아 최적화됨
  const onRemove = useCallback(() => dispatch(deleteTodo(id)), [dispatch, id]); // NOTE: 의존하는 상탯값을 명시해야 이전 값 출력하지 않고 제대로 동작

  return { onToggle, onRemove };
}
