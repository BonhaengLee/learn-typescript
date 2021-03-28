export const types = {
    // @ : 에러 정보를 처리하는 액션을 추가한다.
    SET_ERROR: "timeline/SET_ERROR",

    // 리덕스의 text 상탯값을 변경하는 액션 타입을 추가한다.
    SET_TEXT: "timeline/SET_TEXT",
    // 리덕스의 text 상탯값 변경을 시도하는 액션 타입, 이 타입은 사가 함수에서만 사용된다. 따라서 리듀서에서는 이 타입을 처리하지 않는다.
    TRY_SET_TEXT: "timeline/TRY_SET_TEXT",
};
export const actions = {
    setError: (error) => ({
        type: types.SET_ERROR,
        error,
    }),
    setText: (text) => ({
        type: types.SET_TEXT,
        text,
    }),
    trySetText: (text) => ({
        type: types.TRY_SET_TEXT,
        text,
    }),
};

// @ : error 상탯값의 초깃값은 빈 문자열이다. + text의 초깃값은 빈 문자열이다.
const INITIAL_STATE = { nextPage: 0, isLoading: false, error: "", text: "" };
const reducer = createReducer(INITIAL_STATE, {
    [types.SET_ERROR]: (state, action) => (state.error = action.error),
    [types.SET_TEXT]: (state, action) => (state.text = action.text),
});
