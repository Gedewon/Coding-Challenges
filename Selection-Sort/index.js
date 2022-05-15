// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    if(arr[i] === -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_line = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) arr[j] = input_line[j];
    let obj = new Solution();
    obj.selectionSort(arr,n);
    printArray(arr,arr.length);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution
{
  select(arr,j){
      
      let min_idx=j;
      for(;j<arr.length;j++){
        //find the minum value in the index 
            if (arr[j] < arr[min_idx])
            min_idx = j;
            }
            return min_idx;
        
    }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
       let minIndex; 
       //code here
       for(let i = 0;i<n;i++){
         //get the selected  value 
           minIndex=this.select(arr,i+1);
        //   swapp the element now 
           if(arr[minIndex]<arr[i])
          [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
           
       }
       
       return arr;
  }
    
}

