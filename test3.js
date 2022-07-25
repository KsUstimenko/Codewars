const countMonkeys = (num) => {
    let i = 1;
    let arrayMonkeys = [];
    while (i <= num) {
        arrayMonkeys.push(i);
        i = i + 1;
    }
    return arrayMonkeys;
}

console.log(countMonkeys(10));