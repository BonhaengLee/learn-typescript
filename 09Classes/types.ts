class Stark {
    name : string = "Brandon";
    static castle: string = "Winterfell"
    saying: string;

    constructor(){
        this.saying = Stark.castle;
    }

    hello(person:string){
        console.log("Hello"+person)
    }
}

var ned = new Stark();
//saying은 constructor assign castle 후 변화 없음
ned.saying = "Winter is coming";
//console.log(Stark.castle);
ned.hello("Robert")