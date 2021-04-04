function largestOfFour(arr) {
    return arr.map((value) => {
        return Math.max(...value);
    })
}
const array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// console.log(largestOfFour(array));
// [5, 27, 39, 1001]