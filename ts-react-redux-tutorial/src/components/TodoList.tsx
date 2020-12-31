/*❤ : 커스텀 훅을 작성하여 리덕스 스토어의 상태의 todos 배열을 조회함 */
import React from 'react';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

function TodoList(): JSX.Element {
  const todos = useTodos(); // TODO: 커스텀 훅 사용해서 조회

  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
