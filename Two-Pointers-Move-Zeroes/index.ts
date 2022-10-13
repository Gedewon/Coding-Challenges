/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if(nums.length ===1 ) return;
    
  let [leftPointer,rightPointer] = [0,1];
   while(rightPointer < nums.length && leftPointer < rightPointer){
       if(nums[leftPointer]==0){
            if(nums[rightPointer] ==0){
                rightPointer++;
            }else{
                swap(leftPointer,rightPointer,nums);
            }
       }else{
           leftPointer++;
           rightPointer++;
       }
   }
};

/*
[0,1,0,3,12]
 | |
 

**/

const swap = (a,b,array)=>{
    [array[a],array[b]] = [array[b],array[a]];
}
