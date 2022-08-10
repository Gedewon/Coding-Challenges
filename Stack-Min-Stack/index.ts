class Node { 
    data;
    next;
    min;
 constructor(data,next=null,min=0){
     this.data = data ;
     this.next = next;
     this.min = min;
 }
}

class MinStack {
    head;
    constructor() {
    this.head = null;
    }

    push(val: number): void {
        let newNode; 
        if(this.head == null){newNode=  new Node(val,null,val)}
        else{ newNode= new Node(val,this.head,Math.min(this.head.min,val))}
        this.head = newNode;
    }

    pop(): void {
        const node = this.head.data;
        this.head = this.head.next;
        return node;
    }

    top(): number {
        if(this.head)
       return this.head.data;
    }

    getMin(): number {
        if(this.head)
       return this.head.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
