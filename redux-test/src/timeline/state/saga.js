// 부수 효과 발생시킬 때 사용하는 함수
import { all, call, put, take, fork } from "redux-saga/effects";
import { actions, types } from "./index";
// 좋아요 이벤트를 서버로 전송하는 비동기 함수
import { callApiLike } from "../../common/api";

// REQUEST_LIKE 액션을 처리하는 제네레이터 함수=사가함수
export function* fetchData(action) {
    while (true) {
        // take는 인수로 전달된 액션 타입을 기다린다. RL 액션 발생 시 다음 줄 실행된다. yield take는 액션 객체를 반환한다. RL 객체에는 timeline 객체가 들어 있다.
        const { timeline } = yield take(types.REQUEST_LIKE);
        // put 함수는 새로운 액션 발생, 결과적으로 store.dispatch 메서드를 호출하는 효과가 있다.
        yield put(actions.setLoading(true));
        // put 함수로 좋아요 숫자를 증가시키는 액션을 발생시킴
        yield put(actions.addLike(timeline.id, 1));
        // call 함수는 입력된 함수를 대신 호출해줌, 프로미스를 반환 시 프로미스가 처리됨 상태가 될 때까지(서버로부터 응답이 올 때까지) 기다림
        yield call(callApiLike);
        // 로딩이 끝났단 것을 알리는 액션을 발생, 하나의 RL 액션 처리가 끝나고 새로운 RL 액션이 발생할 때까지 기다림
        yield put(actions.setLoading(false));
    }
}

// 여러 개의 사가 함수를 모아놓은 함수, 사가 미들웨어에 입력됨
export default function* watcher() {
    yield all([fork(fetchData)]); // yield all([fork(f1), fork(f2)])
}

// take, put, call 은 해야 할 일을 설명하는 js 객체이므로 put 함수는 store.dispatch 메서드가 즉시 실행되지 않음.
// 반환된 객체는 사가 미들웨어에 전달, 사가 미들웨어는 일을 하고 결과와 함께 실행 흐름을 작성한 함수로 넘긴다. 이를 반복하면서 함수와 사가 미들웨어가 협업한다.
