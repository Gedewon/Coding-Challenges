function maxFrequency(nums: number[], k: number): number {
    
    nums.sort((a,b)=>a-b);
    let maxFrequency = 0; 
    let start = 0; 
    let sum = 0; 
    
    for(let i = 0; i < nums.length ; i++ ){
        sum += nums[i];
        if( sum+k >= nums[i]*(i-start+1)){
            maxFrequency = Math.max(maxFrequency,(i-start+1));        
        }else{
            sum -= nums[start];
            start += 1 ;
        }
    }

    return maxFrequency;
};
