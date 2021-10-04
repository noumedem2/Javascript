const uniteUnique = (...arr) => {
    return Array.from(new Set([...arr].map(val => {
        return val.join(',').split(',')
    }).join(',').split(',').map(val => parseInt(val))))
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))