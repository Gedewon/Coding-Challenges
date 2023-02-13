function minSubArrayLen(target: number, nums: number[]): number {
  let length = Infinity;
  let [leftPointer, rightPointer, currentRunningSum] = [0, 0, 0];

  for (; rightPointer < nums.length; rightPointer++) {
    currentRunningSum += nums[rightPointer];
    while (currentRunningSum >= target) {
      length = Math.min(rightPointer - leftPointer + 1, length);
      currentRunningSum -= nums[leftPointer++];
    }
  }

  if (length == Infinity) return 0;

  return length;
}
