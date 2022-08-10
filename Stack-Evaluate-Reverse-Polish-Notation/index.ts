function evalRPN(tokens: string[]): number {

    const operationStack:number[] = [];
    let leftOperator= 0 , rightOperator=0;
    
    for(let token of tokens){
        if(isOperator(token)){
            rightOperator = operationStack.pop(); 
            leftOperator = operationStack.pop();
            operationStack.push(
               calculate(token,leftOperator,rightOperator)
            );
        }else{
            operationStack.push(parseInt(token))
        }
    }

    return operationStack.pop();
};
const isOperator = (token)=>{
    return ['+','-','*','/'].indexOf(token) !== -1;
}
const calculate = (operator,left,right)=>{
    switch(operator){
        case '+':
        return left + right;
        case '-':
        return left -right ;
        case "*":
        return left * right;
        case '/':
        return Math.trunc(left/right);
        default:
        return 0;
    }   
 
}

