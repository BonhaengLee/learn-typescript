// 962.ts
class Stack<D> {
    // 1
    private items: D[] = [];
    // 2
    push(item: D) {
        this.items.push(item);
    }
    // 3
    pop() {
        return this.items.pop();
    }
}
// 4
const numberStack = new Stack<number>();
numberStack.push(10);
const v1 = numberStack.pop();
// 5
const stringStack = new Stack<string>();
stringStack.push("a");
const v2 = stringStack.pop();

let myStack: Stack<number>;
myStack = numberStack;
myStack = stringStack; // 타입 에러 6
