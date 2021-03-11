function* g2_second() {
    yield 1;
    // @ : === yield* g1()
    for (const value of g1()) {
        yield value;
    }
    yield 4;
}

function* g2_third() {
    yield 1;
    // @ : 반복가능한 객체가 올 수 있음
    yield* [2, 3];
    yield 4;
}
