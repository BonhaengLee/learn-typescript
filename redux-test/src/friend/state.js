// import createReducer from "../common/createReducer";

// // @ : 액션 타입 정의
// const ADD = "friend/ADD";
// const REMOVE = "friend/REMOVE";
// const EDIT = "friend/EDIT";

// // @ : 액션 생성자 함수 정의, 외부 사용
// export const addFriend = (friend) => ({ type: ADD, friend });
// export const removeFriend = (friend) => ({ type: REMOVE, friend });
// export const editFriend = (friend) => ({ type: EDIT, friend });

// // @ : 친구 데이터 추가, 삭제, 수정하는 리듀서 코드
// const INITIAL_STATE = { friends: [] };

// const reducer = createReducer(INITIAL_STATE, {
//     [ADD]: (state, action) => state.friends.push(action.friend),
//     [REMOVE]: (state, action) =>
//         (state.friends = state.friends.filter(
//             (friend) => friend.id !== action.friend.id
//         )),
//     [EDIT]: (state, action) => {
//         const index = state.friends.findIndex(
//             (friend) => friend.id === action.friend.id
//         );
//         if (index >= 0) {
//             state.friends[index] = action.friend;
//         }
//     },
// });

// // @ : 리듀서는 스토어를 생성할 때 필요하기 때문에 외부 공개, createReducer에서 immer 사용했으므로 리듀서함수에서 간편히 상탯값 수정
// export default reducer;

// @ : 코드 리팩터링
// import createItemsLogic from "../common/createItemsLogic";

// const { add, remove, edit, reducer } = createItemsLogic("friends");
// export const addFriend = add;
// export const removeFriend = remove;
// export const editFriend = edit;
// export default reducer;

// @ : 코드 리팩터링2
import createReducer from "../common/createReducer";
import createItemsLogic from "../common/createItemsLogic";
import mergeReducers from "../common/mergeReducers";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "./common";

const { add, remove, edit, reducer: friendsReducer } = createItemsLogic(
    "friends"
);
// @ : 연령 제한과 개수 제한 정보를 처리하는 액션 타입
const SET_AGE_LIMIT = "friend/SET_AGE_LIMIT";
const SET_SHOW_LIMIT = "friend/SET_SHOW_LIMIT";

export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
// @ : 연령 제한과 개수 제한 정보를 처리하는 액션 생성자 함수
export const setAgeLimit = (ageLimit) => ({ type: SET_AGE_LIMIT, ageLimit });
export const setShowLimit = (showLimit) => ({
    type: SET_SHOW_LIMIT,
    showLimit,
});
// @ : 초깃값으로 두 값의 최댓값
const INITIAL_STATE = { ageLimit: MAX_AGE_LIMIT, showLimit: MAX_SHOW_LIMIT };
// @ : 연령 제한과 개수 제한 정보를 처리하는 리듀서 함수
const reducer = createReducer(INITIAL_STATE, {
    [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
    [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
});
const reducers = [reducer, friendsReducer];
// @ : 친구 목록을 처리하는 리듀서 함수와 하나로 합친다.
export default mergeReducers(reducers);
