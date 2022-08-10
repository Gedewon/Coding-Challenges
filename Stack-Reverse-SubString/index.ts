function reverseParentheses(s: string): string {
    let stack = [];
    for(let str of s){
        if(isNotClosingParenteshis(str)){
            stack.push(str);
        }else{
            let reverseString='';
             let  val = stack.pop();
            while(isNotOpenParenteshis(val)){
                reverseString += val;
                val = stack.pop();
            }
            stack.push(...reverseString.split(''));
        }
    }
    return stack.join('')
};

const isNotClosingParenteshis=(str)=>{
    return [')'].indexOf(str) == -1;
}
const isNotOpenParenteshis=(str)=>{
    return ['('].indexOf(str) == -1;
}
/*

 





**/
