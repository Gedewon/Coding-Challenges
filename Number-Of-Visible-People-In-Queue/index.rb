# @param {Integer[]} heights
# @return {Integer[]}
def can_see_persons_count(heights)
  left_pointer, answer, stack = heights.length-2,Array.new(heights.length,0),[heights.last]

  while left_pointer >= 0 
    top = stack.pop

    while top && top < heights[left_pointer]
        answer[left_pointer] += 1 
        top = stack.pop
    end

    if top && top > heights[left_pointer] 
        stack.push(top)
        answer[left_pointer] += 1 
    end

    stack.push(heights[left_pointer])
    left_pointer -= 1 

  end

  answer
end