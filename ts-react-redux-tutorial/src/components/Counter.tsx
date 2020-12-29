/* NOTE: 카운터 프리젠테이셔널 컴포넌트 만들기
 * 컨테이너 컴포넌트와 구분하여 만든다.
 *  컴포넌트에서 필요한 값과 함수들을 모두 props 로 받아오도록 처리하였습니다.
 *  위 컴포넌트에서는 3개의 버튼을 보여주는데 3번째 버튼의 경우 클릭이 되면
 * 5를 onIncreaseBy 함수의 파라미터로 설정하여 호출합니다. */
import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

export default function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}
