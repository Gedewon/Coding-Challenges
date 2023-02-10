/**
 *
 * @param s string on which to slide
 */

function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let [maxLength, leftPointer] = [-Infinity, 0];
  const uniqString = new Set<string>();

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (uniqString.has(s[rightPointer])) uniqString.delete(s[leftPointer++]);

    //add to the unique Set
    uniqString.add(s[rightPointer]);

    maxLength = Math.max(rightPointer - leftPointer + 1, maxLength);
  }

  return maxLength;
}
