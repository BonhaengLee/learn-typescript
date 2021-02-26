// @ : 미들웨어의 기본 구조
const myMiddleware = (store) => (next) => (action) => next(action);
// NOTE: 미들웨어는 함수가 세개 중첩된 구조.
