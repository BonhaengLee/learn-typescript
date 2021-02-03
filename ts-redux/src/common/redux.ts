import produce from "immer";
// @ : 1) 액션 객체의 타입, 데이터 있는, 없는 경우로 2개
interface TypedAction<T extends string> {
    type: T;
}

interface TypedPayloadAction<T extends string, P> extends TypedAction<T> {
    payload: P;
}
// @ : 2) 액션 생성자 함수의 타입, 데이터 유무 구별을 위해 오버로드 사용
export function createAction<T extends string>(type: T): TypedAction<T>;
export function createAction<T extends string, P>(
    type: T,
    payload: P
): TypedPayloadAction<T, P>;
// @ts-ignore
export function createAction(type, payload?) {
    return payload !== undefined ? { type, payload } : { type };
}
// @ : 3) 리듀서 생성 함수의 타입, S: 상탯값 타입, T: 액션 타입, A: 모든 액션 객체의 유니온 타입
export function createReducer<S, T extends string, A extends TypedAction<T>>(
  // @ : 4) 초기 상탯값을 첫 번째 매개변수
    initialState: S,
    // @ : 5) 모든 액션 처리함수가 담긴 객체를 두 번째 매개변수
    handlerMap: {
      // @ : 6) 각 액션 객체가 가진 payload타입을 알 수 있게 됨
        [key in T]: (
            state: Draft<S>,
            action: Extract<A, TypedAction<key>>
        ) => void;
    }
) {
    return function (
        state: S = initialState,
        action: Extract<A, TypedAction<T>>
    ) {
      // @ : 7) 이머를 통해 불변 객체를 쉽게 다룰 수 있다.
        return produce(state, (draft) => {
          // @ : 8) 입력된 액션에 해당하는 액션 처리 함수 실행
            const handler = handlerMap[action.type];
            if (handler) {
                handler(draft, action);
            }
        });
    };
}
