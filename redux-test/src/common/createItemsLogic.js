// @ : 리듀서에서 공통 기능 분리하기
// @ : 배열과 관련된 액션 타입과 액션 생성자 함수
// @ : 초기 상탯값을 빈 배열로 정의
// @ : 배열의 데이터를 추가, 삭제, 수정하는 리듀서 코드
import createReducer from "./createReducer";

// @ : 배열의 고유한 이름을 매개변수로 받음
export default function createItemsLogic(name) {
  // @ : 입력받은 이름을 이용해 액션 타입 생성
    const ADD = `${name}/ADD`;
    const REMOVE = `${name}/REMOVE`;
    const EDIT = `${name}/EDIT`;
  // @ : 액션 생성자 함수 생성
    const add = (item) => ({ type: ADD, item });
    const remove = (item) => ({ type: REMOVE, item });
    const edit = (item) => ({ type: EDIT, item });

    const reducer = createReducer(
      // @ : 초기 상탯값으로 빈 배열 넣음
        { [name]: [] },
        // @ : 이전과 같음
        {
            [ADD]: (state, action) => state[name].push(action.item),
            [REMOVE]: (state, action) => {
                const index = state[name].findIndex(
                    (item) => item.id === action.item.id
                );
                state[name].splice(index, 1);
            },
            [EDIT]: (state, action) => {
                const index = state[name].findIndex(
                    (item) => item.id === action.item.id
                );
                if (index >= 0) {
                    state[name][index] = action.item;
                }
            },
        }
    );
    // @ : 액션 생성자 함수와 리듀서 내보냄
    return { add, remove, edit, reducer };
}