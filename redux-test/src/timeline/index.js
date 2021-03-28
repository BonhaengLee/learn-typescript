export const types = {
    // @ : 에러 정보를 처리하는 액션을 추가한다.
    SET_ERROR: "timeline/SET_ERROR",
};
export const actions = {
    setError: (error) => ({
        type: types.SET_ERROR,
        error,
    }),
};

// @ : error 상탯값의 초깃값은 빈 문자열이다.
const INITIAL_STATE = { nextPage: 0, isLoading: false, error: "" };
const reducer = createReducer(INITIAL_STATE, {
    [types.SET_ERROR]: (state, action) => (state.error = action.error),
});
