function getIndexToIns(arr, num) {

    /**
     * Trie du tableau par selection
     */
    let arrTr = []
    let arrCopy = [...arr]
    for (let i = 0; i < arr.length; i++) {
        arrTr.push(Math.min(...arrCopy));
        let position = arrCopy.indexOf(Math.min(...arrCopy))
        arrCopy.splice(position, 1)
    }
    console.log(arrTr);
    for (let i = 0; i < arrTr.length; i++) {
        if ((arrTr[i]) >= num) {
            return i
        }
    }
    return arrTr.length;
}

// console.log(getIndexToIns([40, 1, 45, 75, 5, 60], 50));
// 4