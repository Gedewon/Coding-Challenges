function minPairSum(nums: number[]): number {
    
    let maximumPair = [];
    
    nums.sort((a,b)=>a-b);
    
    let leftPointer=0 , rightPointer = nums.length-1;
    
    while(leftPointer < rightPointer){
        maximumPair.push(nums[leftPointer]+nums[rightPointer]);
        leftPointer++;
        rightPointer--;
    }
    return Math.max(...maximumPair)
};
