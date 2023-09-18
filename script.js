 function logger(param) {
    console.log(param)
}

logger('hello')
logger('ciao')
logger('szia') 
 
function logTheSumTwoNumbers(x, y) {

    console.log(x+y)
}

logTheSumTwoNumbers(1,2)

function sumOfTwoNumbers(x, y) {
    let sum = 0;
    sum = x + y;

    return sum;
}

logger (sumOfTwoNumbers(10, 5));