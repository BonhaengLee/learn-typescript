import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/index';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

export default function CounterContainer() {
  // NOTE: ts에서 특별한 점은 useSelector 부분에서 state의 타입을 RootState로 지정해서 사용한다는 것 외에는 없다.
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}
