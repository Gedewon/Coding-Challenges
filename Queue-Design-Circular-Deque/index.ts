class MyCircularDeque {
    public size:number ; 
    public queue:any;
    constructor(k: number) {
        this.size = k;
        this.queue=[];
    }

    insertFront(value: number): boolean {
        if(this.queue.length >= this.size )return false;
        this.queue.unshift(value);
        return true;
    }

    insertLast(value: number): boolean {
       if(this.queue.length >= this.size) return false;
        this.queue.push(value);
        return true;
    }

    deleteFront(): boolean {
      if(this.queue.length <= 0 )return false;
      this.queue.shift();
      return true;
    }

    deleteLast(): boolean {
     if(this.queue.length <= 0 )return false;
      this.queue.pop();
      return true;
    }

    getFront(): number {
     if(this.queue.length!==0)return this.queue[0];
     return -1;
    }

    getRear(): number {
    if(this.queue.length!==0) return this.queue[this.queue.length-1];
    return -1;
    }

    isEmpty(): boolean {
    return this.queue.length == 0 ; 
    }

    isFull(): boolean {
     return this.queue.length === this.size ;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
