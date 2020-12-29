/*: useCounter hook을 사용해서 Counter.tsx 사용
/*: 필요한 함수와 값을 props로 받아오는 게 아니라 useCounter Hook을 통해서 받아옴 
/*: 이제 컨테이너 컴포넌트는 쓸모 없으므로 App 컴포넌트에 Counter2를 렌더링함 */

import React from 'react';
import useCounter from '../hooks/useCounter';

export default function Counter2() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}
