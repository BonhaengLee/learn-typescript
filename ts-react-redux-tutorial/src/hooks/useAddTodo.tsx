// ❤ : 새로운 할 일을 등록하는 함수
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';

function useAddTodo(): (
  text: string
) => { type: string; payload: string | number } {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addTodo(text)), [dispatch]);
}

export default useAddTodo;
