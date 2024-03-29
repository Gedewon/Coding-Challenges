function findOriginalArray(changed: number[]): number[] {

    if(changed.length === 1 ) return [];
    if(changed.length%2 !== 0) return [];
    
    let newMap = new Map<number,number>();
    
    changed = coutSorting(changed);
    changed.forEach(element=>{
        if(newMap.has(element)){
            newMap.set(element,newMap.get(element)+1)
        }else{
            newMap.set(element,1);
        }
    });
    
    let ans  = new Array<number>();
    changed.forEach(element=>{
        
        let doubleValue =  newMap.get(element);
        if(doubleValue>0){
            ans.push(element);
            newMap.set(2*element,newMap.get(2*element) -1);
            newMap.set(element,newMap.get(element)-1);
        }
    })
 

    if(ans.length == changed.length/2) return ans;
    return [];
};

function coutSorting(changed:number[]):number[]{
    let CountArray = []
    
    changed.forEach((element,index)=>{
        CountArray[element] = ++CountArray[element] || 1
    })
    
    return CountArray.flatMap((element,index)=>{
           return new Array(element).fill(index);
    }).filter(a=>a!== null);

}

