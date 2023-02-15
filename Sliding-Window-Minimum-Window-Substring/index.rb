# @param {String} s
# @param {String} t
# @return {String}
def min_window(s, t)

    want_map = Hash.new

    t.each_char  do |char| 
       if want_map.include?(char) 
        want_map[char] += 1 
       else
        want_map[char] = 1 
       end
    end

    count, left_pointer, right_pointer = t.length, 0, 0
    start, min_len = 0, Float::INFINITY

    while right_pointer < s.length 

        if want_map[s[right_pointer]] != nil
            count -= 1 if  want_map[s[right_pointer]] > 0
            want_map[s[right_pointer]] -= 1
        end

        right_pointer += 1;

        while count == 0
            if (right_pointer - left_pointer) < min_len
                min_len = right_pointer - left_pointer
                start = left_pointer
            end

            count += 1 if want_map[s[left_pointer]] == 0 
            want_map[s[left_pointer]] += 1 if want_map[s[left_pointer]] != nil 
            left_pointer += 1 
        end
    end
    return "" if min_len == Float::INFINITY
    s[start...(start+min_len)]
end
