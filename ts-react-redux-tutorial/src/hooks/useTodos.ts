// ❤ : useSelector 를 사용해서 상태를 조회함
import { useSelector } from 'react-redux';
import { RootState } from '../modules/index';
import { TodosState } from '../modules/todos';

export default function useTodos(): TodosState {
  const todos = useSelector((state: RootState) => state.todos);
  return todos;
}
