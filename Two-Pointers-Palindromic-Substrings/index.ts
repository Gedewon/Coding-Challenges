function countSubstrings(s: string): number {
  let totalPalindromicStringCount = 0;

  for (let i = 0; i < s.length; i++) {
    /**
     * this is a general case where we need to slide out for even and odd string values.
     * to avoid repetitive tasks we might do if we  try to do this in a quadratic fashion in o(n^2) time.
     * */
    totalPalindromicStringCount += isPalindromicString(i, i, s);
    totalPalindromicStringCount += isPalindromicString(i, i + 1, s);
  }

  return totalPalindromicStringCount;
}

const isPalindromicString = (leftPointer:number, rightPointer:number, string:string) => {
  let count = 0;
  while (
    leftPointer > -1 &&
    rightPointer < string.length &&
    string[leftPointer] === string[rightPointer]
  ) {
    console.log(leftPointer, ",",rightPointer);
    
    count++;
    leftPointer--;
    rightPointer++;
  }

  return count;
};

console.log(countSubstrings("aaa"));
