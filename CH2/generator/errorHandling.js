function* genFunc() {
    // @ : gen에서 에러 발생
    throw new Error("some error");
}
function func() {
    // @ : 만들어질시 예외발생하지않음
    const gen = genFunc();
    try {
        // @ : next가 호출되면 gen의 예외가 일반함수에 영향을 준다. 따라서 catch로 이동
        gen.next();
    } catch (e) {
        console.log("in catch:", e);
    }
}
func();
