function chunkArrayInGroups(arr, size) {
    let tab = []
    let length = Math.ceil(arr.length / size)
    let position = 0
    for (let i = 0; i < length; i++) {
        tab.push(arr.slice(position, size + position))
        position += size
    }
    return tab;
}

let result = chunkArrayInGroups(["a", "b", "c", "d", 'e'], 2);
// console.log(result);
// [["a", "b", "c"],"d", "e"]]
result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
// console.log(result);
// [[0, 1, 3], [3, 4, 5]]