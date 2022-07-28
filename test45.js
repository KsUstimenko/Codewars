// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
    let toArray = numbers.split(" ");
    let min = toArray[0];
    let max = toArray[0];

    for (let i=0; i<toArray.length; i++) {
        min = Math.min(min, toArray[i]);
        max = Math.max(max, toArray[i]);
    }
    return max.toString() + " " + min.toString();
}

console.log(highAndLow("1 2 3 4 5"));