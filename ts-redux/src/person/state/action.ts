import { createAction } from "../../common/redux";
// @ : 1) enum으로 액션 타입 정의
export enum ActionType {
    SetName = "person_setName",
    SetAge = "person_setAge",
}
// @ : 2) createAction 함수를 이용해 액션 생성자 함수 정의
export const actions = {
    SetName: (name: string) => createAction(ActionType.SetName, { name }),
    SetAge: (age: number) => createAction(ActionType.SetAge, { age }),
};
