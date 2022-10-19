function pivotIndex(nums: number[]): number {
  
    let [prefix_sum,sufix_sum] = buildPrefixSum(nums);
   
    let index = 0; 
    while(index < nums.length){
        if(prefix_sum[index] == sufix_sum[index]) return index;
        index++
        
    };

    return -1;
    
 // way faster intermes of operations as well 
//     let sum = nums.reduce((a,b)=>a+b) , leftsum = 0 ; 
    
//     for(let [index,element] of Object.entries(nums)){
//         if(leftsum == sum-element-leftsum)return +index;
//         leftsum += nums[index];
//     };
    
//     return -1;
};

const buildPrefixSum = (nums:number[]):[number[],number[]]=>{
    
    let prefixtemp:number[] = [0] ; 
    let sufixtemp:number[]=[0];
    
    for(let i=1 ; i < nums.length ; i++){
        prefixtemp[i] = nums[i-1] + prefixtemp[i-1];
        
        sufixtemp.unshift(
            sufixtemp[0] + nums[(nums.length)-i] 
        );
    }
  
  return [prefixtemp,sufixtemp];      
}

