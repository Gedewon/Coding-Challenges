function compress(chars: string[]): number {
  if(chars.length  <2 ) return chars.length;
  let [leftPointer,rightPointer] = [0,0];  
  let answer = 0;
    
    
    while(rightPointer < chars.length){
        
        while(rightPointer < chars.length && chars[leftPointer] == chars[rightPointer]){
            rightPointer++;
        }
        
        chars[answer++]=chars[leftPointer];
        
        if(rightPointer-leftPointer >1){
            let count = (rightPointer-leftPointer).toString();
            for(let char of count){
            chars[answer++] = char;
                                
            }
        }
        
        leftPointer=rightPointer;
        
    }
    
   return answer;
};



/*

 [ a , a , b , b , c ,c ,c ]
   i
           j
 [a,2,]


**/
