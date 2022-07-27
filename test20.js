// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    let result = [];
for (let i=0;i<array.length;i++) {
    if (array === []) {
        return [];
    }
    if (array[i] === Math.abs(array[i])) {
        result.push(array[i] * -1);
    }
    else {
        result.push(Math.abs(array[i]));
    }
}
return result;
}

console.log(invert([1,-2,3,-4,5]));