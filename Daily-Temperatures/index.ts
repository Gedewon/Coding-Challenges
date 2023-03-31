type MonoTonicStack = [index: number,value: number]


function dailyTemperatures(temperatures: number[]): number[] {
    const monotonicStack:MonoTonicStack[] = [[temperatures.length-1,temperatures[temperatures.length-1]]];

    const answer = new Array<number>(temperatures.length).fill(0);

    let current:MonoTonicStack;

    for (let i = temperatures.length-2; i >= 0; i--) {
        current = monotonicStack.pop() as MonoTonicStack;

        // pop until we get the next greater element in the stack
        while(monotonicStack.length !== 0 && current[1] < temperatures[i])current= monotonicStack.pop() as MonoTonicStack;
        
        if(current[1]>temperatures[i]){ 
            answer[i]=current[0]-i;
            monotonicStack.push(current);
        }

        monotonicStack.push([i,temperatures[i]])
    }

    return answer;
}