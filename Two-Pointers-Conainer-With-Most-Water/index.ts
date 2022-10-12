function maxArea(height: number[]): number {
     let [leftPointer,rightPointer] = [0,height.length-1];
     let maxArea = -Infinity;

      while(leftPointer<rightPointer){
          maxArea = Math.max(maxArea,getArea(leftPointer,rightPointer,height));
  
           if(height[leftPointer]<height[rightPointer])leftPointer++;
           else rightPointer--;
          
      }
    return maxArea;
};

function getArea(left,right,heights){
    let widht = Math.abs(right-left);
    let height = Math.min(heights[left],heights[right]);
    return widht * height;
}

