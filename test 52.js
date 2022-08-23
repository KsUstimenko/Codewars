// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let result = 0;

    for (const arrElement of arr) {
        if ( arrElement > 0) {
            result = result + arrElement;
        }
    }
    return result;
}

console.log(positiveSum([]));

// https://www.codewars.com/kata/5715eaedb436cf5606000381