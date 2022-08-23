// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    return  str.split(' ').reverse().join(' ')

}

console.log(nameShuffler('john McClane'))

//https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript