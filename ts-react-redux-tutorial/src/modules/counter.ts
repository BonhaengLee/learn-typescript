// import { ActionType, createReducer } from 'typesafe-actions';
// import { createAction } from 'typesafe-actions/dist/deprecated/create-standard-action';

// // #: 리덕스 모듈 작성
// // NOTE: 액션 type 선언
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';
// const INCREASE_BY = 'counter/INCREASE_BY';

// // NOTE: 액션 생성 함수 선언
// // return 생략할 수 있어서 화살표 함수 이용
// // export const increase = (): { type: 'counter/INCREASE' } => ({
// //   type: INCREASE,
// // });
// // export const decrease = (): { type: 'counter/DECREASE' } => ({
// //   type: DECREASE,
// // });
// // export const increaseBy = (
// //   diff: number
// // ): { type: 'counter/INCREASE_BY'; payload: number } => ({
// //   type: INCREASE_BY,
// //   payload: diff,
// // });

// export const increase = createAction(INCREASE)();
// // () => ({ type: INCREASE })
// export const decrease = createAction(DECREASE)();
// // () => ({ type: DECREASE })
// export const increaseBy = createAction(INCREASE_BY)<number>();
// // (payload: number) => ({ type: INCREASE_BY, payload })

// /* NOTE: 액션 객체들에 대한 type 준비하기
//  * ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입 */
// // type CounterAction =
// //   | ReturnType<typeof increase>
// //   | ReturnType<typeof decrease>
// //   | ReturnType<typeof increaseBy>;
// const actions = { increase, decrease, increaseBy };
// type CounterAction = ActionType<typeof actions>;

// // NOTE: 상태의 타입과 상태의 초깃값 선언하기
// // 리덕스의 상태의 타입을 선언할 때는 type or interface
// type CounterState = {
//   count: number;
// };

// const initialState: CounterState = {
//   count: 0,
// };

// // NOTE: 리듀서 작성하기, useReducer와 비슷하다.
// // 함수의 반환 타입에 상태의 타입을 넣는 것을 잊지 마라
// // function counter(
// //   state: CounterState = initialState,
// //   action: CounterAction
// // ): CounterState {
// //   switch (action.type) {
// //     case INCREASE:
// //       return { count: state.count + 1 };
// //     case DECREASE:
// //       return { count: state.count - 1 };
// //     case INCREASE_BY:
// //       return { count: state.count + action.payload };
// //     default:
// //       return state;
// //   }
// // }
// // const counter = createReducer<CounterState, CounterAction>(initialState, {
// //   [INCREASE]: (state) => ({ count: state.count + 1 }),
// //   [DECREASE]: (state) => ({ count: state.count - 1 }),
// //   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// // });
// // NOTE: counter 리듀서를 메서드 체이닝 방식을 통해 구현
// const counter = createReducer<CounterState, CounterAction>(initialState)
//   .handleAction(increase, (state) => ({ count: state.count + 1 }))
//   .handleAction(decrease, (state) => ({ count: state.count - 1 }))
//   .handleAction(increaseBy, (state, action) => ({
//     count: state.count + action.payload,
//   }));

// export default counter;
import { createAction, createReducer } from 'typesafe-actions';

export const increase = createAction('counter/INCREASE')();
export const decrease = createAction('counter/DECREASE')();
export const increaseBy = createAction('counter/INCREASE_BY')<number>(); // payload 타입을 Generics 로 설정해주세요.

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counter = createReducer(initialState)
  .handleAction(increase, (state: { count: number }) => ({
    count: state.count + 1,
  }))
  .handleAction(decrease, (state: { count: number }) => ({
    count: state.count - 1,
  }))
  .handleAction(
    increaseBy,
    (state: { count: number }, action: { payload: number }) => ({
      count: state.count + action.payload,
    })
  );

export default counter;
