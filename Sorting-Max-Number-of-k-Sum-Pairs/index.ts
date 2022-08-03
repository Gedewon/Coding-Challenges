function maxOperations(nums: number[], k: number): number {
    
    nums.sort((a,b)=>a-b);
    let leftPointer=0 , rightPointer=nums.length -1, maxoperations = 0 ; 
    
    while(leftPointer < rightPointer){  
        let isEqual = nums[leftPointer] + nums[rightPointer];
        if(isEqual == k ){
            maxoperations++; 
            leftPointer++; 
            rightPointer--;
        }else if(isEqual > k){
            rightPointer--;
        }else{
            leftPointer++;
        };
    }
    return maxoperations;


};
