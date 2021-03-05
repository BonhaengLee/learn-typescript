// import { createStore, combineReducers } from "redux";
// import timelineReducer, {
//     addTimeline,
//     removeTimeline,
//     editTimeline,
//     increaseNextPage,
// } from "./timeline/state";
// import friendReducer, {
//     addFriend,
//     removeFriend,
//     editFriend,
// } from "./friend/state";
// // @ : 친구 목록과 타임라인 모듈에서 액션 생성자 함수와 리듀서 함수를 가져온다.

// const reducer = combineReducers({
//     timeline: timelineReducer,
//     friend: friendReducer,
// });
// // @ : combineReducers 함수를 이용해 두개의 리듀서를 하나로 합친다. 상탯값에는 timeline, friend로 데이터 저장됨

// const store = createStore(reducer);
// // @ : 스토어 생성

// store.subscribe(() => {
//     const state = store.getState();
//     console.log(state);
// });
// // @ : 디버깅 위해 액션 처리가 끝날 때마다 상탯값을 로그로 출력한다.

// store.dispatch(addTimeline({ id: 1, desc: "코딩은 즐거워" }));
// store.dispatch(addTimeline({ id: 2, desc: "리덕스 좋아" }));
// store.dispatch(increaseNextPage());
// store.dispatch(editTimeline({ id: 2, desc: "리덕스 너무 좋아" }));
// store.dispatch(removeTimeline({ id: 1, desc: "코딩은 즐거워" }));
// // @ : 타임라인 테스트를 위해 다섯개의 액션 생성

// store.dispatch(addFriend({ id: 1, desc: "아이유" }));
// store.dispatch(addFriend({ id: 2, desc: "손나은" }));
// store.dispatch(editFriend({ id: 2, desc: "수지" }));
// store.dispatch(removeFriend({ id: 1, desc: "아이유" }));
// // @ : 친구 목록을 테스트하기 위해 네개의 액션을 생성


// import React from "react";
// import ReactDOM from "react-dom";
// import TimelineMain from "./timeline/container/TimelineMain";
// import FriendMain from "./friend/container/FriendMain";

// ReactDOM.render(
//     <div>
//         <FriendMain />
//         <TimelineMain />
//     </div>,
//     document.getElementById("root")
// );

// @ : 210305 react-redux 사용
import React from "react";
import ReactDOM from "react-dom";
import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";
import store from './common/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    // @ : 1) 스토어 객체를 Provider 컴포넌트의 속성값으로 넣는다. Provider는 전달받은 스토어 객체의 subscribe 메서드를 호출해서 액션 처리가 끝날 때마다 알림을 받는다.
    <Provider store={stroe}>
<div>
        <FriendMain />
        <TimelineMain />
    </div>    </Provider>,
    document.getElementById("root")
);