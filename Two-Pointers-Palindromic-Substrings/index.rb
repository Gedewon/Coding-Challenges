# @param {String} s
# @return {Integer}
def count_substrings(s)
    total_palidromic_string_count = 0 

    for i in 0...(s.length) do 
        total_palidromic_string_count += is_palindromic_string(i, i, s)
        total_palidromic_string_count += is_palindromic_string(i, 1+i, s)
    end

    total_palidromic_string_count
end


def is_palindromic_string(left_pointer,right_pointer,s)
    count=0

    while (left_pointer > -1 && right_pointer < s.length  && s[left_pointer] === s[right_pointer] )do
        count+=1
        left_pointer-=1 
        right_pointer+=1 
    end
    
    count
end
