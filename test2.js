//Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (array) => {
    let i = 0;
    let result = 0;
    while (i < array.length) {
        const currentElement = array[i]**2;
        result = result + currentElement;
        i = i + 1;
    }
    return result;
}

console.log(squareSum([1, 2, 2]));