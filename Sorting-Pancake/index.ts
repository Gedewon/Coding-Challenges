function pancakeSort(arr: number[]): number[] {
    
   let flip = []; 
   let lastUnsorted = arr.length;
 
    while(lastUnsorted>0){
        
    let maxValue = Number.NEGATIVE_INFINITY;
    let maxIndex =0;
        
        
        for(let i=0 ; i < lastUnsorted ; i++){
            if(arr[i]>maxValue){
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        if(maxIndex == lastUnsorted){
            --lastUnsorted; 
            continue;
        }
        
        flip.push(maxIndex+1);
         
        reverse(arr,maxIndex);
        
        flip.push(lastUnsorted);
        reverse(arr,lastUnsorted-1);
        --lastUnsorted;
    }
        
        
        
    return flip ;
};

const reverse=(arr,maxIndex)=>{
    const toSortArray = arr.splice(0,maxIndex+1);
    toSortArray.reverse();
    arr.unshift(...toSortArray);
}

