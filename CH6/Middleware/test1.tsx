// @ : 미들웨어의 기본 구조
const myMiddleware = (store) => (next) => (action) => next(action);
