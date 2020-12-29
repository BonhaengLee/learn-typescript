import React from 'react';
// import CounterContainer from './containers/CounterContainer';
import Counter2 from './components/Counter2';
// ❤ : Hooks 이전에는 컨테이너 컴포넌트를 만들 때 connect() 함수를 통해
// ❤ : HOC 패턴을 통해 컴포넌트와 리덕스를 연동하여주었기 때문에 props로
// ❤ : 필요한 값들을 전달해주는 것이 필수였으나 Hooks를 통해 로직을
// ❤ : 분리하는 것도 좋은 방법

function App(): JSX.Element {
  return (
    <>
      <Counter2 />
    </>
  );
}

export default App;
