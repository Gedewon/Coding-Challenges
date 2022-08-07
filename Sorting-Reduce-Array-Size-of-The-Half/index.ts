function minSetSize(arr: number[]): number {
    
    if(arr.length <= 2)return 1;
    
    let set = [];
    let newArray = getSortedByFrequencyArray(arr);
    let target = arr.length/2;
    
    let removed =0;
    let IntegersPair = 0;
    
    while(i<target){
        removed += newArray[IntegersPair][1];
        IntegersPair++;
    }
    
    return IntegersPair;
};

const getSortedByFrequencyArray=(array)=>{
    let frequency = new Map();
     for(let value of array){
        if(frequency.has(value)){
            frequency.set(value,frequency.get(value)+1);
        }else{
            frequency.set(value,1);
        }
    }
    let newArray = [...frequency]
    return newArray.sort((a,b)=>b[1]-a[1]); // kind of priority queue.
}
//runs on O(nlogn)
// use count soriting to make it 

