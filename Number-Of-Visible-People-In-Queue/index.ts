function canSeePersonsCount(heights: number[]): number[] {
  let leftPointer: number = heights.length - 2;
  const stack: number[] = [heights[heights.length - 1]];
  const answer = Array(heights.length).fill(0);

  //let top
  let top: (typeof stack)[number] | undefined;

  while (leftPointer >= 0) {
    top = stack.pop();

    while (top && top < heights[leftPointer]) {
      answer[leftPointer]++;
      top = stack.pop();
    }

    if (top && top > heights[leftPointer]) {
      stack.push(top);
      answer[leftPointer]++;
    }

    //push back the left pointer values.
    stack.push(heights[leftPointer]);
    leftPointer--;
  }

  return answer;
}
