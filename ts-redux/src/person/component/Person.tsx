import React from "react";
import { ReduxState } from "../../common/store";
import { actions } from "../state/action";
import { useSelector, useDispatch } from "react-redux";
import useTypedSelector from "../../common/useTypedSelector";

interface Props {
    birthday: string;
}

export default function Person({ birthday }: Props) {
    // @ : 1) 첫번째 제네릭 타입은 리덕스의 상탯값을 의미한다. 두번째 제네릭 타입은 매개변수로 입력된 함수의 반환값
    // const name = useSelector<ReduxState, string>((state) => state.person.name);
    // const age = useSelector<ReduxState, string>((state) => state.person.age);
    const name = useTypedSelector((state) => state.person.name);
    // @ : 1) ReduxState 타입과 반환값의 타입을 입력할 필요가 없다.
    const age = useTypedSelector((state) => state.person.age);
    const dispatch = useDispatch();
    function onClick() {
        dispatch(actions.setName("mike"));
        dispatch(actions.setAge(23));
    }

    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{birthday}</p>
            <button onClick={onClick}>정보 추가하기</button>
        </div>
    );
}
