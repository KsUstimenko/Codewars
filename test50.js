// Your goal is to return multiplication table for number that is always an integer from 1 to 10.


function multiTable(number) {
    let multiply = 0;
    let result = '';
    let currentNumber = 1;
    while (currentNumber <= 10) {
        multiply = currentNumber * number;
        result += currentNumber + ' * ' + number + ' = ' + multiply;
        if(currentNumber < 10) {
            result+= "\n";
        }
        currentNumber++;
    }
    return result;
}

console.log(multiTable(5));