function smallerNumbersThanCurrent(nums: number[]): number[] {

   let answer:number[] = new Array(nums.length).fill(0);
   nums.forEach((element,index)=>{
        nums.forEach(arryaElement=>{
            if(element > arryaElement)
                answer[index]++;    
        });       
    });   
    
    //O(n) = n^2
    return answer;
     
    
};

function smallerNumbersThanCurrentFaster(nums: number[]): number[] {
    let sortedArray = Array.from(nums).sort((a, b) => a - b); //nlogn
    let arrayCountTimes = new Map<number,number>(); //n 
    
    sortedArray.forEach((element, index) => {  //n
        if (!arrayCountTimes.has(element))
            arrayCountTimes.set(element, index);
        /**{
            8:4,
            2:1,
            1:0,
            3:3
        }*/
    });
    let indexStored :number[] =[];
    nums.forEach((element) => { //n
        indexStored.push(Number(arrayCountTimes.get(element))); //1
    })
    //O(n) = nlogn 
    return indexStored;
}
