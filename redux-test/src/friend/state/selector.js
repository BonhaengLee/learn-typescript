// @ : createSelector 함수를 이용해 선택자 함수를 만든다.
import { createSelector } from "reselect";

// @ : 상탯값에 있는 데이터를 단순히 전달하는 함수들, 이들도 상탯값 함수다. 중복을 없앨 수 있다.
export const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

// @ : 연령 제한이 적용된 친구 목록을 반환하는 선택자 함수를 정의
export const getFriendsWithAgeLimit = createSelector(
    // @ : 연령 제한이 적용된 친구 목록을 반환하는 선택자 함수를 정의
    [getFriends, getAgeLimit],
    // @ : 배열의 함수들이 반환한 값을 입력받아서 처리하는 함수
    (friends, ageLimit) => friends.filter((friend) => friend.age <= ageLimit)
);
export const getFriendsWithAgeShowLimit = createSelector(
    // @ : getFriendWithAgeShowLimit 함수는 getFriendsWithAgeLimit 함수를 이용한다.
    [getFriendsWithAgeLimit, getShowLimit],
    (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit)
);
// @ : reselect 메모이제이션 : getFriendsWithAgeLimit은 friends,ageLimit이 변경될 때만 연산됨
// @ : 선택자함수를 정의해놓으면 여러 컴포넌트에서 쉽게 재사용할 수 있다.
