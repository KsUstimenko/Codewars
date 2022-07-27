// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string).

function sumStr(a,b) {
    let firstToNum;
    let secondToNum;
    if (a === "" ) {
        firstToNum = 0;
    }
    else {
        firstToNum = Number(a);
    }
    if (b === "") {
        secondToNum = 0;
    }
    else {
        secondToNum = Number(b);
    }
    let sum = firstToNum + secondToNum;
    return String(sum);
}

console.log(sumStr("0","5"));