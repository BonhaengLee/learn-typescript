// 992.ts
function print(value: Person | Product) {
    switch (value.type) {
        case "person":
            console.log(value.age);
            break;
        case "product":
            console.log(value.price);
            break;
    }
}
