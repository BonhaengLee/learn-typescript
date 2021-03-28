function* loginFlow() {
    while (true) {
        // 로그인 액션이 발생할 때까지 기다림
        const { id, password } = yield take(types.LOGIN);
        // 로그인 액션이 발생하면 서버로 로그인 요청 보냄
        const userInfo = yield call(callApiLogin, id, password);
        // 서버로부터 사용자 정보가 도착하면 사용자 정보를 저장하는 액션 발생
        yield put(types.SET_USER_INFO, userInfo);
        // 로그아웃 액션 발생할 때까지 기다림
        yield take(types.LOGOUT);
        // 로그아웃에 성공하면 사용자 정보를 지운다.
        yield call(callApiLogout, id);
        // 다시 1번으로 돌아가 로그인 액션을 기다린다.
        yield put(types.SET_USER_INFO, null);
    }
}
