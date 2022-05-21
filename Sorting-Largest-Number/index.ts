function largestNumber(nums: number[]): string {
    /**
     * TODO 1. SORT INC IN FIRST ITEM 30 $ 9 => 9,30
     * TODO 2. JOIN EVERY ELEMENT 
     *  
     */
   if (nums.every(el => el === 0)) return '0';
   return nums
        .sort(sortElementAccordingToTheFirstElement)
        .join('');
    

}
   


const sortElementAccordingToTheFirstElement = (a,b)=>parseInt(b.toString() + a.toString()) - parseInt( a.toString() + b.toString());
  
