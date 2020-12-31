/*❤ : 투두리스트 리덕스 모듈 만들기
/ ❤ : 카운터와는 달리 액션 객체를 만드는 과정에서
/ ❤ : 추가적으로 필요한 페이로드(payload)값이 액션마다 다르다.*/

// TODO: 1. 액션 type / 액션 생성함수 / 액션의 타입스크립트 타입 선언
// NOTE: 액션 type
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// NOTE: 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

// NOTE: 액션들의 타입스크립트 타입 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof deleteTodo>;

// TODO: 2. 상태를 위한 타입 및 초기 상태 선언
// ❤ : Todo 타입은 나중에 컴포넌트에서 불러와 사용하므로 export
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해우기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

// TODO: 3. 리듀서 구현하기
export default function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      /*❤ : 새 항목을 만들 때 마다 고유 ID를 설정하기 위하여 현재 상태의  
      /❤ : 모든 항목들의 id 를 체크하고 그 중 가장 큰 값을 사용하도록 처리*/
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
