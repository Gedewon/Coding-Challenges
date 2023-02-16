# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
  zero_pointer, two_pointer = 0, nums.length-1 
  single_pass = 0 
  while (single_pass <= two_pointer)

    if nums[single_pass] === 2 
        nums[two_pointer], nums[single_pass] =nums[single_pass], nums[two_pointer]
        two_pointer -= 1
    end

    if nums[single_pass] === 0
        nums[zero_pointer], nums[single_pass] =nums[single_pass], nums[zero_pointer]
        zero_pointer += 1
        single_pass += 1
    end

    if nums[single_pass] === 1 
        single_pass += 1
    end

  end
end