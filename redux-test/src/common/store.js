import { createStore, combineReducers, applyMiddleware } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";
import createSagaMiddleware from "redux-saga";
import timelineSaga from "../timeline/state/saga";

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer,
});
// 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();
// 스토어 생성할 때 입력
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// @ : 스토어 객체를 원하는 곳에서 가져다 사용할 수 있음
export default store;
sagaMiddleware.run(timelineSaga);
