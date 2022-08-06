

const checkIfArtimatic = (leftIndex:number, rightIndexe:number, array:number[]):boolean=>{
    
    let newSlice = array.slice(leftIndex,rightIndex+1);
    
    newSlice.sort((a,b)=>b-a);
  
    let diff = newSlice[1] - newSlice[0];
    
     for(let i =0;i+1<newSlice.length;i++)
         if(diff !== newSlice[i+1] - newSlice[i])return false;
    return true;
}


function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    let answer = [];
    
    for(let i = 0 ; i<l.length; i++){
        answer.push(checkIfArtimatic(l[i],r[i],nums));
    }
    
    return answer;
};

