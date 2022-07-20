function targetIndices(nums: number[], target: number): number[] {

   
    let targetIndex: number[] =[];
     bubbleSort(nums).forEach((el,index)=>{
        if(el === target)
           targetIndex.push(index);
     })
  //runs O(n) = n^2
    return targetIndex;
    
};
function targetIndicesFaster(nums: number[], target: number): number[] {
//enter your code below
let listOfTargets = [];
nums.sort((a,b)=>a-b); //nlogn
for(let i = 0;i<nums.length;i++){    //n
  if(nums[i]  > target) break; // break case ;
  if(nums[i] === target)listOfTargets.push(i);

}

//nlogn  run time s 

return listOfTargets;
  
};
 
 function bubbleSort(arr){
     
     let isSorted = false;
     
     while(!isSorted){
          isSorted = true;
        arr.forEach((el,index,arr)=>{
            if(el > arr[index+1]){
              [arr[index],arr[index+1]] = [arr[index+1],arr[index]];
                isSorted = false;
            }
              
            
        })
     }
    return arr; 
 }
 


function targetIndicesMerge(nums: number[], target: number): number[] {

  let SortedArray = Array.from(nums).sort((a,b)=>a-b);  //Sort in count to run it in n +r time 
  let countIndex = [];
 
   for(let i=0;i<nums.length;i++){
       
   
       while(SortedArray[i]==target){
           countIndex.push(i);
           i++
       }
       if(countIndex.length)break;
           
   };
 
 //runs in O(n) =nlogn
 return countIndex;    
};

function countSort(inputArray){

let newArray = Array(inputArray.length)
             .fill(0);

inputArray.forEach(element=>{
     newArray[element]=++newArray[element] || 1;
});
  //runs in O(n) = n+r 
return newArray.map((element,index)=>Array(element)
                           .fill(index))
                           .flat()
                           .filter(Boolean);
}