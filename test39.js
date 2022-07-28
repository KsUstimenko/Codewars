// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
    let sum = 1;
    for (let i=0; i<x.length; i++) {
        sum *= x[i];
    }
    return sum;
}

console.log(grow([4, 1, 1, 1, 4]));