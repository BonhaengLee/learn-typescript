// 사가함수의 예외 처리 : 예외를 발생시키기 위해서 간헐적으로 프로미스 객체가 거부됨 상태가 되도록 한다.
export function callApiLike() {
    // 1초 후 이행됨 상태가 되는 프로미스 객체 반환
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() * 10 < 5) {
                resolve();
            } else {
                reject("callApiLike 실패");
            }
        }, 1000);
    });
}
