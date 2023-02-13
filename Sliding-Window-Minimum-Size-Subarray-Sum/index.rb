# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(target, nums)
 min_length = Float::INFINITY
 left_pointer, current_sum = 0, 0

 for right_pointer in 0...nums.length do
    current_sum += nums[right_pointer]

    while current_sum >= target do 
        min_length = [min_length,(right_pointer-left_pointer+1)].min
        current_sum -= nums[left_pointer]
        left_pointer += 1
    end

 end

 return 0 if min_length.equal?(Float::INFINITY)

 min_length
end
