// 918.ts
function isValidEnumValue(enumObject: any, value: number | string) {
    if (typeof value === "number") {
        // @ : 1) 값이 숫자이면 양방향 매핑인지 검사한다.
        return !!enumObject[value];
    } else {
        return (
            Object.keys(enumObject)
                .filter((key) => isNaN(Number(key)))
                // @ : 2) 값이 문자열이면 양방향 매핑에 의해 생성된 키를 제거하고 해당 값이 존재하는지 검사
                .some((key) => enumObject[key] === value)
        );
    }
}

export default isValidEnumValue;
