/*❤ : 새 항목을 등록할 수 있는 컴포넌트. 
/❤ : 인풋의 상태는 useState로 로컬 상태로 관리 */
import React, { useState, ChangeEvent, FormEvent } from 'react';
import useAddTodo from '../hooks/useAddTodo';

function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value); // TODO: 커스텀 훅 사용해서 새 항목 등록
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
