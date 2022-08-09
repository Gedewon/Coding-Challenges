function isValid(s: string): boolean {
    let stack = [];  // -> stack here. 
    
    for(let bracket of s){
          if(isOpen(bracket) !==  -1)stack.push(bracket);
          else{
              let opening = stack.pop();
              if(!isInRightOrder(opening,bracket))return false;
          }
      }
    return stack.length === 0;
};

const isInRightOrder = (opening,closing)=>{
    let validParentheses = {
          '{':'}',
          '[':']',
          '(':')'
    };
    return validParentheses[opening] == closing;
}

var isOpen = function (char) {
    return char.search(/\(|\[|\{/g);
};

var isClosing = function (char) {
    return char.search(/\]|\}|\)/g);
};
