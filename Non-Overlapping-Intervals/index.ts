function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);

  let [count, leftPointer] = [0, 0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[leftPointer][1] > intervals[i][0]) {
      count++;
      if (intervals[leftPointer][1] > intervals[i][1]) leftPointer = i;
    } else {
      leftPointer = i;
    }
  }

  return count;
}
