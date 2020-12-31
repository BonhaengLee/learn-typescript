// ❤ : 새로운 할 일을 등록하는 함수
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';

function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addTodo(text)), [dispatch]);
}

export default useAddTodo;
