
function merge(intervals: number[][]): number[][] {
    
  intervals.sort((a,b)=>a[0]-b[0]);
  
  let stackOfIntervals = [];
  stackOfIntervals.push(intervals[0]);
  let intervalToCompare ;
  
  for(let i =1;i<intervals.length;i++){
      intervalToCompare = stackOfIntervals.pop();
      
      if(intervalToCompare[1]<intervals[i][0]){
          stackOfIntervals.push(intervalToCompare,intervals[i]);
      }else if(intervalToCompare[1]>=intervals[i][0]){
          intervalToCompare[1] = Math.max(intervalToCompare[1],intervals[i][1]);
          stackOfIntervals.push(intervalToCompare);    
      }  
  }
  
   

  return stackOfIntervals ;
};
