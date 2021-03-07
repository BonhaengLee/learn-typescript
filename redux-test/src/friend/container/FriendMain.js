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

// // @ : react-redux
// import { useSelector, useDispatch } from "react-redux";

// export default function FriendMain() {
//     // @ : 컴포넌트가 리덕스 상탯값 변경에 반응하려면 useSelector 사용,
//     // @ : 여기 입력하는 함수를 선택자 함수라 하고 반환하는 값이 그대로 훅의 반환값으로 사용된다.
//     const friends = useSelector((state) => state.friend.friends);
//     // @ : 액션을 발생시키기 위해서 필요, useDispatch는 dispatch를 반환
//     const dispatch = useDispatch();
//     function onAdd() {
//         const friend = getNextFriend();
//         // @ : dispatch를 이용해 친구를 추가시키는 액션을 발생시킨다.
//         dispatch(addFriend(friend));
//     }
//     console.log("FriendMain render");
//     return (
//         <div>
//             <button onClick={onAdd}></button>
//             <FriendList friends={friends} />
//         </div>
//     );
// }

// @ : 코드 리팩토링2
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

export default function FriendMain() {
    const [
        ageLimit,
        showLimit,
        friendsWithAgeLimit,
        friendsWithAgeShowLimit,
    ] = useSelector((state) => {
        const { friends, ageLimit, showLimit } = state.friend;
        // @ : 친구 목록에 연령 제한을 적용해서 새로운 목록을 만든다.
        const friendsWithAgeLimit = friends.filter(
            (friend) => friend.age <= ageLimit
        );
        return [
            ageLimit,
            showLimit,
            friendsWithAgeLimit,
            // @ : 연령 제한이 적용된 목록에 개수 제한을 적용해서 새로운 목록을 만든다.
            friendsWithAgeLimit.slice(0, showLimit),
        ];
    }, shallowEqual);
    const dispatch = useDispatch();
    function onAdd() {
        const friend = getNextFriend();
        dispatch(actions.addFriend(friend));
    }
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            {/* 연령 제한 옵션, setAgeLimit 액션이 생성되고 리덕스의 상탯값이 변경된다. */}
            <NumberSelect
                onChange={(v) => dispatch(actions.setAgeLimit(v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix="세 이하만 보기"
            />
            {/* 연령 제한으로 필터링된 친구 목록을 보여줌 */}
            <FriendList friends={friendsWithAgeLimit} />
            {/* 개수 제한 옵션, setShowLimit 액션이 생성되고, 리덕스의 상탯값이 변경됨 */}
            <NumberSelect
                onChange={(v) => dispatch(actions.setShowLimit(v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix="명 이하만 보기(연령 제한 적용)"
            />
            {/* 연령 제한과 개수 제한이 모두 적용된 친구 목록을 보여줌 */}
            <FriendList friends={friendsWithAgeShowLimit} />
        </div>
    );
}
// @ : 연령 제한과 개수 제한을 위한 옵션 목록
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
