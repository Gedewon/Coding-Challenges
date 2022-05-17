function targetIndices(nums: number[], target: number): number[] {

   
    let targetIndex: number[] =[];
     bubbleSort(nums).forEach((el,index)=>{
        if(el === target)
           targetIndex.push(index);
    })
    return targetIndex;
    
};
 
 function bubbleSort(arr){
     
     let isSorted = false;
     
     while(!isSorted){
          isSorted = true;
        arr.forEach((el,index,arr)=>{
            if(el > arr[index+1]){
              [arr[index],arr[index+1]] = [arr[index+1],arr[index]];
                isSorted = false;
            }
              
            
        })
     }
    return arr; 
 }
 