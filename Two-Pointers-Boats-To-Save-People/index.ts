function numRescueBoats(people: number[], limit: number): number {
    let [leftPointer,rightPointer]=[0,people.length-1];
    let ans = 0 ;
    
    people.sort((a,b)=>a-b);
    
    while(leftPointer<=rightPointer){
        ans++;
        if(people[rightPointer]+people[leftPointer] <= limit)
            leftPointer++;
        rightPointer--;
    }
    
    
    return ans;
};

/*

(A |+ B) <= limite in array 


**/
