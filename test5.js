// Given an array of integers, return a new array with each value doubled.

function maps(x){
    const result = [];
    for(let i = 0; i < x.length; i++) {
        result.push((x[i] * 2));
    }
    return result;
}

console.log(maps([1, 2, 3]));