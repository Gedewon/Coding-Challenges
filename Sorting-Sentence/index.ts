

function sortSentence(s: string): string {
   return mergeSort(s.split(' ')).join(' ').replace(/\d/g, '');

};


function mergeSort(arr: string[]): string[] {
    const half = arr.length / 2;

    // the base case is array length <=1
    if (arr.length <= 1) {
        return arr;

    }

    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left :string[] , right  :string[]) :string[] {
    let sortedArr = []; // the sorted elements will go here

    while (left.length && right.length) {
        // insert the smallest element to the sortedArr
        if (left[0].charAt(left[0].length - 1) < right[0].charAt(right[0].length - 1)) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    // use spread operator and create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
}
