import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";

// export default function FriendMain() {
//     const [, forceUpdate] = useReducer((v) => v + 1, 0);
//     useEffect(() => {
//         // @ : FriendMain 컴포넌트 개선 : 불필요하게 컴포넌트 함수 호출되지 않도록 상탯값 변경 여부 검사
//         // @ : 이전 상탯값 저장을 위한 변수
//         let prevFriends = store.getState().friend.friends;
//         // const unsubscribe = store.subscribe(() => forceUpdate());
//         // return () => unsubscribe();
//         // @ : 상탯값이 변경될 경우에만 forceUpdate()
//         const unsubscribe = store.subscribe(() => {
//             const friends = store.getState().friend.friends;
//             if(prevFriends != friends){
//                 forceUpdate();
//             }
//             prevFriends = friends;
//         })
//         return () => unsubscribe();
//     }, []);
//     function onAdd() {
//         const friend = getNextFriend();
//         store.dispatch(addFriend(friend));
//     }
//     console.log("FriendMain render");
//     const friends = store.getState().friend.friends;
//     return (
//         <div>
//             <button onClick={onAdd}>친구 추가</button>
//             <FriendList friends={friends} />
//         </div>
//     );
// }

// @ : react-redux
import { useSelector, useDispatch } from "react-redux";

export default function FriendMain() {
    // @ : 컴포넌트가 리덕스 상탯값 변경에 반응하려면 useSelector 사용,
    // @ : 여기 입력하는 함수를 선택자 함수라 하고 반환하는 값이 그대로 훅의 반환값으로 사용된다.
    const friends = useSelector((state) => state.friend.friends);
    // @ : 액션을 발생시키기 위해서 필요, useDispatch는 dispatch를 반환
    const dispatch = useDispatch();
    function onAdd() {
        const friend = getNextFriend();
        // @ : dispatch를 이용해 친구를 추가시키는 액션을 발생시킨다.
        dispatch(addFriend(friend));
    }
    console.log("FriendMain render");
    return (
        <div>
            <button onClick={onAdd}></button>
            <FriendList friends={friends} />
        </div>
    );
}
