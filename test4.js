// Учитывая число n, вернуть количество положительных нечетных чисел меньше n.

const countOddNumbers = (n) => {
    let i = 1;
    let result = 0;
    while (i < n) {
        if (i % 2 !== 0) {
            result = result + 1;
        }
        i = i + 1;
    }
    return result;
}

console.log(countOddNumbers(7));