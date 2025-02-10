// Write a function that takes in a positive integer and return wether it is even or not in boolean
function isEven(num) {
    //will work the same even if we don't specify these two conditions separately
    // if(num == 0){
    //     return true
    // }
    // if(num == 1) {
    //     return false;
    // }
    if(num % 2 == 0) {
        return true;
    } else {
        return false
    }
}

console.log(isEven(75))
