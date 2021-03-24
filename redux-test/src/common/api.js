export function callApiLike() {
    // 1초 후 이행됨 상태가 되는 프로미스 객체 반환
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}
