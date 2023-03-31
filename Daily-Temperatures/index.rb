# @param {Integer[]} temperatures
# @return {Integer[]}
def daily_temperatures(temperatures)
    monotonic_stack = [[temperatures.length-1, temperatures[temperatures.length-1]]]
    
    answer = Array.new(temperatures.length, 0)

    for i in (temperatures.length-2).downto(0) do
      current = monotonic_stack.pop
      
      while monotonic_stack.length != 0 && current[1] <= temperatures[i] do
        current = monotonic_stack.pop
      end

      if current[1] > temperatures[i]
        answer[i] = current[0] - i 
        monotonic_stack.push(current)
      end

      monotonic_stack.push([i,temperatures[i]])
    end
    answer
end