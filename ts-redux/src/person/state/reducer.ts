import { ActionType, actions } from "./action";
import { createReducer } from "../../common/redux";

// @ : 1) 인터페이스로 상탯값 타입 정의
export interface StatePerson {
    name: string;
    age: number;
}
// @ : 2) 초기 상탯값 정의
const INITIAL_STATE = {
    name: "empty",
    age: 0,
};
// @ : 3) ReturnType 내장 타입을 이용해 모든 액션 객체 타입을 유니온 타입으로 만듦
type Action = ReturnType<typeof actions[keyof typeof actions]>;
// @ : 4) createReducer로 리듀서를 만든다. 모든 타입을 제네릭으로
export default createReducer<StatePerson, ActionType, Action>(INITIAL_STATE, {
    // @ : 5) action.payload가 SetName 액션 객체의 데이터라는 걸 알고 있음
    [ActionType.SetName]: (state, action) => (state.name = action.payload.name),
    [ActionType.SetAge]: (state, action) => (state.age = action.payload.age),
});
