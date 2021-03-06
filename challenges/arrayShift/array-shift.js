function insertShiftArray(array, valueToBeAdded) {
    if(array.length === 0) return [valueToBeAdded];

    let returnArray = [];
    let x = 0;
    const indexToAddAt = Math.ceil(array.length / 2) -  1;
    for(let i = 0; i < array.length; i++) {
        returnArray[x] = array[i];
        x++;
        if(i === indexToAddAt) {
            returnArray[x] = valueToBeAdded;
            x++;
        }
    }
    return returnArray;
}

function removeMiddle(array) {
    if(array.length === 0) return 'Nothing to remove';
    const indexToDelete = Math.ceil(array.length / 2) - 1;
    let returnArray = [];
    let x = 0;

    for(let i = 0; i < array.length; i++) {
        if(i !== indexToDelete) {
            returnArray[x] = array[i];
            x++;
        }
    }
    return returnArray;

}

module.exports = {
    insertShiftArray,
    removeMiddle
};
