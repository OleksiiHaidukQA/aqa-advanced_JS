function checkOrder(available, ordered){
    if (available >= ordered && ordered !== 0) {
        return 'Your order is accepted';
    } 
    if (ordered === 0) {
        return 'Your order is empty';
    }
    if (available < ordered) {
        return 'our order is too large, we don’t have enough goods.';
    }
}


console.log(checkOrder(15,15))
console.log(checkOrder(13,15))
console.log(checkOrder(17,15))
console.log(checkOrder(17,0))