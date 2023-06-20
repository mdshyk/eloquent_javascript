// Write a function that takes in a positive integer and return wether it is even or not in boolean
function isEven(num) {
    if(num = 0){
        return true
    }
    else if(num % 2 == 0) {
        return true;
    } else {
        return false
    }
}

console.log(isEven(75))