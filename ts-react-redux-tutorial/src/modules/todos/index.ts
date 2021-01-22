// NOTE: actions, types, reducer 에서 내보낸 것들을 불러와서 바로 내보내는 작업
// NOTE: 이 작업을 해주는 이유는 기존에 todos.ts 파일을 의존하던 곳을 (예: 루트 리듀서, Hook, 컴포넌트)
// NOTE: 수정하지 않고도 잘 작동하게 하기 위함
export { default } from './reducer'; // reducer 를 불러와서 default로 내보내겠다는 의미
export * from './actions'; // 모든 액션 생성함수들을 불러와서 같은 이름들로 내보내겠다는 의미
export * from './types'; // 모든 타입들을 불러와서 같은 이름들로 내보내겠다는 의미
