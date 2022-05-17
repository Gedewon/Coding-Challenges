/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  
     let start = 0 ; 
     let end = nums.length - 1; 
     let index = 0 ; 
    while ( index <= end && start < end){
        if(nums[index] == 0){
          nums[index]=  nums[start] ; 
          nums[start] = 0;
            index ++;
            start++;
        }else if(nums[index] == 2){
            nums[index] = nums[end];
            nums[end] = 2;
            end--;
        }else{
            index++;
        }
        
    }

};



