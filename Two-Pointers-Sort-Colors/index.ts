/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let [zeroPointer, twoPointer] = [0, nums.length - 1];

  for (
    let singlePass = 0;
    singlePass <= twoPointer && singlePass < nums.length;

  ) {
    if (nums[singlePass] == 2) {
      [nums[singlePass], nums[twoPointer]] = [
        nums[twoPointer],
        nums[singlePass],
      ];
      twoPointer--;
    }

    if (nums[singlePass] === 0) {
      [nums[singlePass], nums[zeroPointer]] = [
        nums[zeroPointer],
        nums[singlePass],
      ];
      zeroPointer++;
      singlePass++;
    }

    if (nums[singlePass] == 1) singlePass++;
  }
}
