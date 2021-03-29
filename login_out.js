function* loginFlow() {
    while (true) {
        // 로그인 액션이 발생할 때까지 기다림
        // @ : take 함수는 전달된 액션 타입을 기다린다.
        // @ : LOGIN 액션이 발생하면 다음 줄의 코드가 실행된다. take는 액션 객체를 반환한다.
        const { id, password } = yield take(types.LOGIN);

        // 로그인 액션이 발생하면 서버로 로그인 요청 보냄
        // @ : call 함수는 입력된 함수를 대신 호출해 준다.
        // @ : 만약 입력된 함수가 프로미스를 반환하면 프로미스가 처리됨 상태가 될 때까지 기다린다.
        const userInfo = yield call(callApiLogin, id, password);

        // 서버로부터 사용자 정보가 도착하면 사용자 정보를 저장하는 액션 발생
        // @ : put 함수는 새로운 액션을 발생시킨다. store.dispatch 메서드를 호출하는 효과가 있다.
        yield put(types.SET_USER_INFO, userInfo);

        // 로그아웃 액션 발생할 때까지 기다림
        yield take(types.LOGOUT);

        // 로그아웃에 성공하면 사용자 정보를 지운다.
        yield call(callApiLogout, id);

        // 다시 1번으로 돌아가 로그인 액션을 기다린다.
        yield put(types.SET_USER_INFO, null);
    }
}
