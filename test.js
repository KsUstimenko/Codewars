const yearToCentury = (year) => {
    let century = year / 100;
    let reminder = year % 100;
    if (reminder === 0) {
        return Math.floor(century);
    }
    return Math.floor(century + 1);
}

console.log(yearToCentury(1992));