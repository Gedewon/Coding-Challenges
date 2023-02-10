# @param {String} s
# @return {Integer}
require "set"
def length_of_longest_substring(s)
 return 0 if s.empty? 
 
 left_pointer, unique_set = 0, Set.new
 max_len = 0
 for right_pointer in 0...(s.length) do 
   while unique_set.include? s[right_pointer]
    unique_set.delete(s[left_pointer])
    left_pointer += 1
   end
   unique_set.add(s[right_pointer])
   max_len = [max_len, (right_pointer-left_pointer)+1].max
 end
 max_len
end


