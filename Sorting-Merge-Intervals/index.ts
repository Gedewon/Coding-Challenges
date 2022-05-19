function merge(intervals: number[][]): number[][] {
    

    
    intervals.sort((a, b) => a[0] - b[0]);

    
    
    intervals.forEach((element,index)=>{
       
    if (!!intervals[index + 1] && (element[1] >= intervals[index + 1][0])) {

        // merge both 
        let left = intervals.shift();
        let right = intervals.shift();
       let maxright=  Math.max(left[1],...right);
        intervals.unshift([left[0],maxright]);
         }
        
  
        
    });
    return intervals ;
};
