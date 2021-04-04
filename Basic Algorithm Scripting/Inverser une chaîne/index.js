/**
 * Inverser une chaîne
 */
function reverseString(str) {
    let array = []
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[arr.length - (i + 1)])
    }
    return array.join('');
}

// console.log(reverseString("hello"));
// olleh