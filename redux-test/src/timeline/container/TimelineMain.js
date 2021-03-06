import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
// @ : 필요할 때마다 타임라인 데이터 가져옴, 서버를 흉내냄
import { addTimeline } from "../state";
// @ : 타임라인 데이터를 추가하기 위한 액션 생성자 함수
import TimelineList from "../component/TimelineList.js";
import { actions } from "../state";
import { useDispatch, useSelector } from "react-redux";

export default function TimelineMain() {
    const dispatch = useDispatch();
    const timelines = useSelector((state) => state.timeline.timelines);
    const isLoading = useSelector((state) => state.timeline.isLoading);

    const error = useSelector((state) => state.timeline.error); // 리덕스 상탯값으로부터 에러 값을 가져온다.

    const text = useSelector((state) => state.timeline.text);
    // 현재 입력 중인 문자열을 상탯값에 저장
    const [currentText, setCurrentText] = useState("");
    function onChangeText(e) {
        const text = e.target.value;
        // 문자열을 입력할 때마다 액션 발생시킴
        dispatch(actions.trySetText(text));
        setCurrentText(text);
    }

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
        // store.dispatch(addTimeline(timeline));
        dispatch(actions.addTimeline(timeline));
    }
    function onLike(e) {
        const id = Number(e.target.dataset.id);
        const timeline = timelines.find((item) => item.id === id);
        dispatch(actions.requestLike(timeline));
    }
    // console.log("TimelineMain render");
    // // @ : 렌더링 시점 확인
    // const timelines = store.getState().timeline.timelin  `       es;
    // @ : 스토어에서 타임라인 배열 가져옴

    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} onLike={onLike} />
            {!!isLoading && <p>전송중...</p>}
            {!!error && <p>에러 발생: {error}</p>}
            <input type="text" value={currentText} onChange={onChangeText} />
            {!!text && <p>{text}</p>}
        </div>
    );
}
