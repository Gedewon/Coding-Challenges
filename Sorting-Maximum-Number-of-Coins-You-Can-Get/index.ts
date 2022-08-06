function maxCoins(piles: number[]): number {
  let answerNubmer = 0 ; 
  piles.sort((a,b)=>a-b); //sort in increasing order 
  let leftPointer = 0 , rightPointer= piles.length -2 ; // pointer to left 
    while(leftPointer < rightPointer){
         answerNubmer+= piles[rightPointer];
         leftPointer+= 1;
         rightPointer -=2;
    }
    return answerNubmer;
};
