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
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */
const  swap=(a: number[],i:number ,j:number):void=> {
[a[i],a[j]] = [a[j],a[i]];
} 


function countSwaps(a: number[]): void {
    // Write your code here
    let swapCount:number =0 ;
    let lastUnsorted: number = a.length -1;
    let notSorted:boolean = true;
    while(notSorted){
        notSorted = false;
    for(let i = 0;i<lastUnsorted;i++){
        if(a[i]>a[i+1]){
            swap(a,i,i+1);
            swapCount++; 
            notSorted = true;
        }
    }
        lastUnsorted --;
    }
    console.log(`Array is sorted in ${swapCount} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)


}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}

