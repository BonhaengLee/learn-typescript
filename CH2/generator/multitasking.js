function* minsu() {
    const myMsgList = [
        "안녕 나는 민수야",
        "만나서 반가워",
        "내일 영화 볼래?",
        "시간 안 되니?",
        "내일 모레는 어때?",
    ];
    for (const msg of myMsgList) {
        // @ : gen 함수는 yield를 통해 자발적으로 자신의 실행을 멈춘다.
        console.log("수지: ", yield msg);
    }
}

function suji() {
    const myMsgList = ["", "안녕 나는 수지야", "그래 반가워", "..."];
    const gen = minsu();
    for (const msg of myMsgList) {
        // @ : 일반 함수에서는 제네레이터 객체의 next 메서드를 호출하여 제네레이터 함수가 다시 실행되도록 한다.
        // @ : 일반 함수가 자신의 실행을 멈춘다고 봃 수도 있다.
        console.log("민수: ", gen.next(msg).value);
    }
}
suji();
