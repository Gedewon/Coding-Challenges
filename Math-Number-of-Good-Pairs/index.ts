function sigmaSum(value:number):number{
    if(value == 0 ) return 0 ;
    return value + sigmaSum(value-1);
}

function numIdenticalPairs(nums: number[]): number {

    if(nums.length == 1 )return 0;
     
    let frequencyMap = new Map<number,number>();
    
    nums.forEach(elements=>{
        if(frequencyMap.has(elements)){
            frequencyMap.set(elements,frequencyMap.get(elements)+1);
        }else{
            frequencyMap.set(elements,1);
        }
    });
    let good_pairs = 0 ;
    for(let values of frequencyMap.values()){
        good_pairs += sigmaSum(values-1);
    }
    
    return good_pairs;
};
