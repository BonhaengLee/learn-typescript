const friends = [
    { name: "쯔위", age: 15 },
    { name: "수지", age: 20 },
    { name: "아이유", age: 25 },
    { name: "손나은", age: 30 },
];

const timelines = [
    { name: "점심이 맛있었다", age: 0 },
    { name: "나는 멋지다", age: 10 },
    { name: "호텔에 놀러 갔다.", age: 20 },
    { name: "비싼 핸드폰을 샀다.", age: 30 },
];
// @ : 기본 데이터

function makeDataGenerator(items) {
    let itemIndex = 0;
    // @ : getNextData 함수는 items, itemIndex 변수를 기억하는 클로저
    return function getNextData() {
        const item = items[itemIndex % items.length];
        itemIndex += 1;
        // @ : 중복되지 않은 id 값을 넣어서 반환
        return { ...item, id: itemIndex };
    };
}
export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
