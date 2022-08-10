class MyQueue {
    
    public stack1;
    public stack2;
    
    constructor() {
    this.stack1 = [];
    this.stack2 = [];
    }

    push(x: number): void {
        this.stack1.push(x)
       while(this.stack1.length !== 0){
           this.stack2.push(this.stack1.pop())
       }
   
    }

    pop(): number {
    return this.stack2.shift();
    }

    peek(): number {
    return this.stack2[0];
    }

    empty(): boolean {
    return this.stack2.length==0;
    }


}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
