function Todo() {
    const [count, setCount] = useState(0);
    function onClick() {
        setCount(count + 1);
    }
    return (
        <div>
            {/* Title컴포넌트는 새로운 title 속성값을 내려받는다.
      Title은 부모컴포넌트가 렌더링될때마다 같이 렌더링된다. title 속성값이 변경될 때만 하려면 React.memo */}
            <Title title={`현재 카운트: ${count}`} />
            <button onClick={onClick}>증가</button>
        </div>
    );
}
