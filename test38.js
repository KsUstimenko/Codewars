// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name){
    const fewStrings = name.split(' ');
    const abbreviate = fewStrings[0][0] + '.' + fewStrings[1][0];
    return abbreviate.toUpperCase();
}

console.log(abbrevName("Sam Harris"));