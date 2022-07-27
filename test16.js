//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
    if (card[card.length - 1] === '♥') {
        return 'hearts';
    }
    if (card[card.length - 1] === '♦') {
        return 'diamonds';
    }
    if (card[card.length - 1] === '♣') {
        return 'clubs';
    }
    if (card[card.length - 1] === '♠') {
        return 'spades';
    }
}

console.log(defineSuit('J♦'));