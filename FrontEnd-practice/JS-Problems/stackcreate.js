class Stack {
    constructor() {
        this.arr = [];
    }

    push(elem) {
        this.arr.push(elem);
    }

    pop() {
        if (this.isEmpty()) {
            return null;  
        }
        return this.arr.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;  
        }
        return this.arr[this.arr.length - 1];
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    size() {
        return this.arr.length;
    }

    clear() {
        this.arr = [];
    }
    print() {
        console.log((this.arr.reverse()).join(' -> '));
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.print();
console.log(stack.peek()); 
console.log(stack.pop());   
console.log(stack.size());  
console.log(stack.isEmpty()); 
stack.clear();
console.log(stack.isEmpty()); 