function targetIndices(nums: number[], target: number): number[] {


    let targetIndex = [];
     mergeSort(nums).forEach((el,index)=>{
        if(el === target)
           targetIndex.push(index);
    })
    return targetIndex;
    
};
 
 function mergeSort(arr: number[]): number[] {
     const half = arr.length / 2;
 
     // the base case is array length <=1
     if (arr.length <= 1) {
         return arr;
 
     }
 
     const left = arr.splice(0, half); // the first half of the array
     const right = arr;
     return merge(mergeSort(left), mergeSort(right));
 }
 
 function merge(left :number[] , right  :number[]) :number[] {
     let sortedArr = []; // the sorted elements will go here
 
     while (left.length && right.length) {
         // insert the smallest element to the sortedArr
         if (left[0]  < right[0])  {
             sortedArr.push(left.shift());
         } else {
             sortedArr.push(right.shift());
         }
     }
 
     // use spread operator and create a new array, combining the three arrays
     return [...sortedArr, ...left, ...right];
 }

 console.log(targetIndices([1,5,3,2,7,2,9],2));