function smallerNumbersThanCurrent(nums: number[]): number[] {

   let answer:number[] = new Array(nums.length).fill(0);
   nums.forEach((element,index)=>{
        nums.forEach(arryaElement=>{
            if(element > arryaElement)
                answer[index]++;    
        });       
    });
    
    return answer ;
     
    
};
