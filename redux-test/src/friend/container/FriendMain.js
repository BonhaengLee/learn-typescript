import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";

export default function FriendMain() {
    const [, forceUpdate] = useReducer((v) => v + 1, 0);
    useEffect(() => {
        // @ : FriendMain 컴포넌트 개선 : 불필요하게 컴포넌트 함수 호출되지 않도록 상탯값 변경 여부 검사
        // @ : 이전 상탯값 저장을 위한 변수
        let prevFriends = store.getState().friend.friends;
        // const unsubscribe = store.subscribe(() => forceUpdate());
        // return () => unsubscribe();
        // @ : 상탯값이 변경될 경우에만 forceUpdate()
        const unsubscribe = store.subscribe(() => {
            const friends = store.getState().friend.friends;
            if(prevFriends != friends){
                forceUpdate();
            }
            prevFriends = friends;
        })
        return () => unsubscribe();
    }, []);
    function onAdd() {
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }
    console.log("FriendMain render");
    const friends = store.getState().friend.friends;
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    );
}
