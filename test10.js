//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
    let wolfNumber = queue.indexOf('wolf');
    let sheepNumber = queue.length-1-wolfNumber;
    if (wolfNumber === queue.length - 1) {
        return '"Pls go away and stop eating my sheep"';
    }
    return '"Oi! Sheep number ' + sheepNumber + '! You are about to be eaten by a wolf!"';
}

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));