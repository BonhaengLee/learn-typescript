import { createStore, combineReducers } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";
import createSagaMiddleware from 'redux-saga'
import timelineSaga from '../timeline/state/saga'

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
// @ : 스토어 객체를 원하는 곳에서 가져다 사용할 수 있다. 
export default store;
sagaMiddleware.run(timelineSaga)