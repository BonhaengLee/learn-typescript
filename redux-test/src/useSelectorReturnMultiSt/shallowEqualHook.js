import { shallowEqual, useSelector } from "react-redux";

function useMySelector(selector) {
    // @ : 항상 shallowEqual 입력
    return useSelector(selector, shallowEqual);
}

function MyComponent() {
    const [value1, value2] = useSelector((state) => [
        state.value1,
        state.value2,
    ]);
    // @ : 상탯값이 하나만 반환된다면 value3 내부 모든 상탯값 비교 비효율적
    const value3 = useMySelector((state) => state.value3);
    // @ : 성능이 걱정된다면 상탯값을 하나만 반환할 때도 배열로 감싸면 된다.
    const [value4] = useMySelector((state) => state.value4);
}
