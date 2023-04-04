# @param {Integer[][]} intervals
# @return {Integer}
def erase_overlap_intervals(intervals)
    intervals.sort_by! {|element| element[0]}
    count,left_pointer = 0,0

    for i in 1...intervals.length do 

        if(intervals[left_pointer][1] > intervals[i][0])
            count += 1
            left_pointer=i if intervals[left_pointer][1]>intervals[i][1]
        else
            left_pointer = i;
        end

    end

    count
end