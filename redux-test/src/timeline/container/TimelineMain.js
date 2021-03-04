import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
// @ : 필요할 때마다 타임라인 데이터 가져옴, 서버를 흉내냄
import { addTimeline } from "../state";
// @ : 타임라인 데이터를 추가하기 위한 액션 생성자 함수
import TimelineList from "../component/TimelineList.js";

export default function TimelineMain() {
    const [, forceUpdate] = useReducer((v) => v + 1, 0);
    useEffect(() => {
        // @ : FriendMain 컴포넌트 개선 : 불필요하게 컴포넌트 함수 호출되지 않도록 상탯값 변경 여부 검사
        // @ : 이전 상탯값 저장을 위한 변수
        let prevTimelines = store.getState().timeline.timelines;
        // @ : 상탯값이 변경될 경우에만 forceUpdate()
        const unsubscribe = store.subscribe(() => {
            const timelines = store.getState().timeline.timelines;
            if (prevTimelines != timelines) {
                forceUpdate();
            }
            prevTimelines = timelines;
        });
        return () => unsubscribe();
        // const unsubscribe = store.subscribe(() => forceUpdate());
        // // @ : 액션이 처리될 때마다 화면을 다시 그리기 위해 subscribe, 리덕스상태변경시 컴포넌트 렌더링 위해 forceUpdate
        // return () => unsubscribe();
        // // @ : 컴포넌트가 언마운트될때 subscribe에 등록한 이벤트 처리함수를 해제
    }, []);
    function onAdd() {
        const timeline = getNextTimeline();
        // @ : 타임라인 추가 버튼을 누르면 타임라인을 추가하는 액션 발생
        store.dispatch(addTimeline(timeline));
    }
    console.log("TimelineMain render");
    // @ : 렌더링 시점 확인
    const timelines = store.getState().timeline.timelines;
    // @ : 스토어에서 타임라인 배열 가져옴
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} />
        </div>
    );
}
