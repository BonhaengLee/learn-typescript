// 917.ts
function getEnumLength(enumObject: any) {
    const keys = Object.keys(enumObject);
    // @ : enum의 값이 숫자이면 두 개씩 들어가므로 문자열만 계산
    return keys.reduce(
        // @ : 1) 원소가 숫자면 양방향 매핑이므로 주의. 객체의 속성값이 문자열인 경우만 계산하면 열거형의 원소 개수를 구할 수 있다.
        (acc, key) => (typeof enumObject[key] === "string" ? acc + 1 : acc),
        0
    );
}

export default getEnumLength;
