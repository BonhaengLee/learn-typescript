import { take, put, call } from "redux-saga/effects";
// @ : cloneableGenerator를 이용하면 복사 가능한 제네레이터 객체를 만들 수 있다. 복사하면 테스트하기 좋다.
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { types, actions } from "./index";
import { fetchData } from "./saga";
import { callApiLike } from "../../common/api";

describe("fetchData", () => {
    // @ : 테스트에 사용할 데이터를 미리 만들어 놓는다.
    const timeline = { id: 1 };
    const action = actions.requestLike(timeline);

    // @ : 복사 가능한 제네레이터 객체를 생성한다. fetchData 함수를 직접 호출해도 제네레이터 객체가 생성되지만 복사 기능은 없다.
    const gen = cloneableGenerator(fetchData)();

    // @ : 처음 네 개의 yield로 반환되는 값들을 순차적으로 테스트한다.
    expect(gen.next().value).toEqual(take(types.REQUEST_LIKE));
    expect(gen.next(action).value).toEqual(put(actions.setLoading(true)));
    expect(gen.next().value).toEqual(put(actions.addLike(timeline.id, 1)));
    expect(gen.next(action).value).toEqual(put(actions.setError("")));
    expect(gen.next().value).toEqual(call(callApiLike));

    // @ : callApiLike에서 프로미스 객체를 거부됨 상태로 만드는 경우를 테스트한다. 프로미스 객체가 처리됨 상태가 되는 것도 테스트해야 하므로 제네레이터 객체 복사, next 대신 throw를 호출하면 에러를 발생시킬 수 있다.
    it("on fail callApiLike", () => {
        const gen2 = gen.clone();
        const errorMsg = "error";
        expect(gen2.throw(errorMsg).value).toEqual(
            put(actions.setError(errorMsg))
        );
        expect(gen2.next().value).toEqual(
            put(actions.addLike(timeline.id, -1))
        );
    });

    // @ : callApiLike에서 프로미스 객체를 처리됨 상태로 변경하는 경우 테스트한다.
    it("on success callApiLike", () => {
        const gen2 = gen.clone();
        expect(gen2.next(Promise.resolve()).value).toEqual(
            put(actions.setLoading(true))
        );
        expect(gen2.next().value).toEqual(take(types.REQUEST_LIKE));
    });
});
