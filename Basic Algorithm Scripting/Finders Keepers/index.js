function findElement(arr, func) {
    let tab = arr.map(func)
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == true) {
            return arr[i]
        }
    }
    return undefined;
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// 2
