function Title(props) {
    return <p>{props.title}</p>;
}
// @ : memo함수의 인수로 컴포넌트를 입력하면 속성값 변경될 때만 렌더링됨
export default React.memo(Title);
