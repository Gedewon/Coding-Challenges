
console.log(((largestString,smallestString)=>{
  
  const isPermutation=(i)=>{
    return largestString
            .slice(i,i + smallestString.length)
            .split('')
            .reduce((prev,cur)=>cur.charCodeAt(0) + prev,0) === subStringCountNumber;
  
  }
  
   let subStringCountNumber = 0;
   let permutation  = [];
  
   [...smallestString].forEach(element=>{subStringCountNumber +=element.charCodeAt(0)});
   console.log(subStringCountNumber);
    for(let i = 0 ; i<largestString.length;i++){
       if(isPermutation(i)) permutation.push(largestString.slice(i,i + smallestString.length))
    }
  
  
  // O(n) -> 
  return permutation
  
  })("cbabcacabca","ab"));
  