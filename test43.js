// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

function explode(s) {
    let result = '';
    for (let i=0; i<s.length; i++) {
        result += s[i].repeat(Number(s[i]));
    }
    return result;
}

console.log(explode('312'));