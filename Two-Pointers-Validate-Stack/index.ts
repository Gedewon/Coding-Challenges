function validateStackSequences(pushed: number[], popped: number[]): boolean {
   let stack:number[]=[]; 
   let popedPointer =0; 
    
    for(let value of pushed){
        stack.push(value);
        while(stack.length > 0 && stack[stack.length-1]  == popped[popedPointer]){
            stack.pop();
            popedPointer++;
        }  
    }
    return popedPointer == pushed.length;
};


/**

p = [1,2]
q = [1,2] , [2,1]

----------------
p = [1 ,2 ,3 ]
q = [3,2,1], [1,2,3] , [2,3,1] ,[2,1,3]

indexof 3 in poped and indexof 2 in poped
  indexof 3 in pushed and index of 2 in pushed


**/
