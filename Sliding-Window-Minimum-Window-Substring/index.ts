function minWindow(s: string, t: string): string {
  const wantMap = new Map();
  for (const value of t) {
    if (wantMap.has(value)) {
      wantMap.set(value, wantMap.get(value) + 1);
    } else wantMap.set(value, 1);
  }

  let count = t.length;

  let [leftPointer, rightPointer] = [0, 0];

  let [start, minLen] = [0, Infinity];

  while (rightPointer < s.length) {
    if (wantMap.get(s[rightPointer]) > 0) {
      count--;
    }
    wantMap.set(s[rightPointer], wantMap.get(s[rightPointer]) - 1);
    rightPointer++;

    while (count === 0) {
      if (rightPointer - leftPointer < minLen) {
        minLen = rightPointer - leftPointer;
        start = leftPointer;
      }

      if (wantMap.get(s[leftPointer]) === 0) {
        count++;
      }
      wantMap.set(s[leftPointer], wantMap.get(s[leftPointer]) + 1);
      leftPointer++;
    }
  }

  if (minLen === Infinity) return "";

  return s.substring(start, minLen);
}
