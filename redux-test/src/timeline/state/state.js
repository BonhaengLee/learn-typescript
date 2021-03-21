// import createReducer from "../common/createReducer";

// const ADD = "timeline/ADD";
// const REMOVE = "timeline/REMOVE";
// const EDIT = "timeline/EDIT";
// const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";
// // @ : 타임라인의 끝에 도달했을 때 서버에게 요청할 페이지 번호를 관리하는 액션 타입. 나머지는 친구목록과 비슷

// export const addTimeline = (timeline) => ({ type: ADD, timeline });
// export const removeTimeline = (timeline) => ({ type: REMOVE, timeline });
// export const editTimeline = (timeline) => ({ type: EDIT, timeline });
// export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });
// // @ : 페이지번호를 증가시키는 액션 생성자 함수

// const INITIAL_STATE = { timelines: [], nextPage: 0 };
// // @ : 타임라인의 상탯값에는 다음 페이지 번호도 저장됨

// const reducer = createReducer(INITIAL_STATE, {
//     [ADD]: (state, action) => state.timelines.push(action.timeline),

//     [REMOVE]: (state, action) =>
//         (state.timelines = state.timelines.filter(
//             (timeline) => timeline.id !== action.timeline.id
//         )),

//     [EDIT]: (state, action) => {
//         const index = state.timelines.findIndex(
//             (timeline) => timeline.id === action.timeline.id
//         );
//         if (index >= 0) {
//             state.timelines[index] = action.timeline;
//         }
//     },

//     [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
//     // @ : 페이지 번호를 증가시키는 리듀서 코드. 나머지는 친구목록과 비슷
// });
// export default reducer;

// @ : 코드 리팩터링
import createReducer from "../../common/createReducer";
import createItemsLogic from "../../common/createItemsLogic";
// @ : 공통 로직 사용
import mergeReducers from "../../common/mergeReducer";

// @ : timelines이라는 이름으로 공통 로직 생성
const { add, remove, edit, reducer: timelineReducer } = createItemsLogic(
    "timelines"
);

export const types = {
    INCREASE_NEXT_PAGE: "timeline/INCREASE_NEXT_PAGE",
    REQUEST_LIKE: "timeline/REQUEST_LIKE",
    ADD_LIKE: "timeline/ADD_LIKE",
    SET_LOADING: "timeline/SET_LOADING",
};

export const actions = {
    addTimeline: add,
    removeTimeline: remove,
    editTimeline: edit,
    increaseNextPage: () => ({
        type: types.INCREASE_NEXT_PAGE,
    }),
    requestLike: (timeline) => ({ type: types.REQUEST_LIKE, timeline }),
    addLike: (timelineId, value) => ({
        type: types.ADD_LIKE,
        timelineId,
        value,
    }),
    setLoading: (isLoading) => ({
        type: types.SET_LOADING,
        isLoading,
    }),
};

const INITIAL_STATE = { nextPage: 0, isLoading: false };
const reducer = createReducer(INITIAL_STATE, {
    [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
    [types.ADD_LIKE]: (state, action) => {
        const timeline = state.timelines.find(
            (item) => item.id === action.timelineId
        );
        if (timeline) {
            timeline.likes += action.value;
        }
    },
    [types.SET_LOADING]: (state, action) =>
        (state.isLoading = action.isLoading),
});

// @ : 이전) 공통 로직에 포함되지 않은 액션타입, 액션생성자함수, 리듀서코드정의
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

// const INITIAL_STATE = { nextPage: 0 };
// const reducer = createReducer(INITIAL_STATE, {
//     [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
// });

// @ : mergeReducers 함수로 공통로직 리듀서함수와 직접작성 리듀서함수를 합침
const reducers = [reducer, timelineReducer];
export default mergeReducers(reducers);
