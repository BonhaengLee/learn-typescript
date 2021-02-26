// @ : 미들웨어 설정하는 방법
// @ : 미들웨어는 스토어와 액션 객체를 기반으로 필요한 작업을 수행할 수 있다.
// @ : next 함수를 호출하면 다른 미들웨어 함수가 호출되면서 최종적으로 리듀서함수가 호출됨
// @ : 다음은 미들웨어를 사용하기 위해 리덕스를 설정하는 코드
import { createStore, applyMiddleware } from "redux";
const middleware1 = (store) => (next) => (action) => {
    console.log("middleware1 start");
    const result = next(action);
    console.log("middleware1 end");
    return result;
};

const middleware2 = (store) => (next) => (action) => {
    console.log("middleware2 start");
    const result = next(action);
    console.log("middleware2 end");
    return result;
};
// @ : 간단한 두개의 미들웨어 정의

const myReducer = (state, action) => {
    console.log("myReducer");
    return state;
};
// @ : 아무일도 하지않는 리듀서 정의

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
// @ : applyMiddleware 함수를 이용해 미들웨어가 입력된 스토어를 생성함
store.dispatch({ type: "someAction" });
// @ : middleware1 start
// @ : middleware2 start
// @ : myReducer
// @ : middleware2 end
// @ : middleware1 end

// @ : mw1 미들웨어에서 호출한 next함수는 mw2 미들웨어 함수를 실행한다.
// @ : mw2 미들웨어에서 호출한 next함수는 스토어가 원래가지고 있던 dispatch 메서드를 호출한다.
// @ : 최종적으로 스토어의 dispatch 메서드는 리듀서를 호출한다.
// @ : 각 미들웨어에서는 리듀서 호출 전후에 필요한 작업을 정의할 수 있다.
