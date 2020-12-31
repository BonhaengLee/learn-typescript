/*❤ : 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
/❤ : 텍스트 영역 클릭시 done 값이 바귀고 우측 (X)를 클릭하면 삭제
/❤ : 할 일 정보를 가지고 있는 todo를 props로 받아옴 
/❤ : onToggle, onRemove 를 추후 TodoList에서 props로 넣어주는 방식으로 구현도 가능*/
import React from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps): JSX.Element {
  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

export default TodoItem;
