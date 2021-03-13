function MyComponent() {
    const [count, setCount] = useState({ value: 0 });
    function onClick() {
        // @ : 상탯값이 직접 수정되나 화면이 갱신되지는 않음. 리액트는 변경된 사실을 모른다.
        count.value = 2;
        // ...
        // @ : 상탯값 변경 함수를 호출해도 화면은 갱신되지 않는다. 변경 유무를 단순 비교로 판단하는데, count 객체의 참조값은 그대로이므로 무시한다.
        // @ : 따라서 상탯값도 속성값처럼 불변 변수로 관리하는 것이 좋다.
        setCount(count);
    }
}
// ...
