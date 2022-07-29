// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    let string = String(n);
    let result = [];
    for (let i = string.length - 1; i>=0; i--) {
        result.push(Number(string[i]));
    }
    return result;
}

console.log(digitize(35231));