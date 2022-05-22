function rearrangeArray(nums: number[]): number[] {
  nums.sort(function(a, b) { return a - b; });
  let startPointer = 0;
  let endPointer = nums.length - 1;
  let rearrangedArray = [];
  while (startPointer < endPointer) {
      rearrangedArray.push(nums[startPointer]);
      rearrangedArray.push(nums[endPointer]);
      startPointer++;
      endPointer--;
  }
   // check if even list to privent duplication 
  if(nums.length %2 !== 0 )
      rearrangedArray.push(nums[startPointer]);

  return rearrangedArray;
  
  
};

