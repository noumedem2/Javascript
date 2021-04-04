function mutation(arr) {
    arr[0] = arr[0].toLowerCase()
    arr[1] = arr[1].toLowerCase()
    let tab = arr[1].split('')
    let response = true
    for (let i = 0; i < tab.length; i++) {
        if ((arr[0].split('')).indexOf(tab[i]) == -1) {
            response = false
        }
    }
    return response;
}
// console.log(mutation(["hello", "hey"]));
// false
