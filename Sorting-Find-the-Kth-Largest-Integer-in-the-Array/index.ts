function kthLargestNumber(nums: string[], k: number): string {
    nums.sort(compareFun);  //nlogn 
    return nums[k-1];
};

const  compareFun = (a:string,b:string):number=>{
    if(a.length !==  b.length){
         if ( a.length > b.length ) return -1;
         return 1;
    }else {
        for(let i =  0 ; i < a.length ; i++ ){
             if( Number(a[i])> Number(b[i])) return -1;
             else if(Number(a[i])< Number(b[i]))return 1 ;
       }  
    }
    
    return 0; 
}