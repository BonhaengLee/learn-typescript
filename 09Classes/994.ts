// 994.ts
function print(value: Person | Product) {
    if ("age" in value) {
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}
