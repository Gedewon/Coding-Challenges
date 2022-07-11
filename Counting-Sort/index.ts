'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr: number[]): number[] {
    // Write your code here
    let answer = new Array(100).fill(0);
    arr.map(element=>answer[element]++);
    return answer;

}
//count sorting
let inputArray = [1,2,1,4];
(function CountSorting(inputArray){

  let newArray = Array(inputArray.length)
                .fill(0);

  inputArray.forEach(element=>{
        newArray[element]=++newArray[element] || 1;
  });

  return newArray.map((element,index)=>Array(element)
                              .fill(index))
                              .flat()
                              .filter(Boolean);
})(inputArray);


function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number[] = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
