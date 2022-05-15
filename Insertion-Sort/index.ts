'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */
function display(arr:number[]):void{
    arr.forEach((element,index)=>{
        (index+1) === arr.length?
            console.log(element)
            :
            process.stdout.write(element.toString()+' ');
    }
    )
}

function insertionSort1(n: number, arr: number[]): void {
 
   for(let i = arr.length-1;i>=0;i--){
       let current = arr[i];
       let j = i-1;
       while(j>=0 && arr[j] > current){
           arr[j+1] = arr[j];
           display(arr);
           j--;
       }
       arr[j+1] =current;
   }
           display(arr);
   
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
