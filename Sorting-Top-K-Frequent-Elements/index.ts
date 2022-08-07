function topKFrequent(nums: number[], k: number): number[] {

    let set = new Set<number>();
    let priorityArray = getFrequent(nums);
    
    for(let i = 0 ;  i< k ; i++){
        set.add(priorityArray[i][0])
    }
    return [...set];    
};

const getFrequent = (array)=>{
    let freq= new Map();
    for(let value of array){
        if(!freq.has(value))freq.set(value,0);
        freq.set(value,freq.get(value)+1);
    }
    let value = [...freq];
    return value.sort((a,b)=>b[1]-a[1]); //useFrequency as sorting variable (PriorityQueue)
}
