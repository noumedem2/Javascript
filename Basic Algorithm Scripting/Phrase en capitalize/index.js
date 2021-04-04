function titleCase(str) {
    let arr = str.split(' ')
    arr = arr.map((value => {
        let arr = value.split('')
        arr[0] = arr[0].toUpperCase()
        for (let i = 1; i < arr.length; i++) {
            arr[i] = arr[i].toLowerCase()
        }
        return arr.join('')
    }))
    return arr.join(" ");
}


// console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot
// console.log(titleCase("sHoRt AnD sToUt"));
// Short And Stout