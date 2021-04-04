function confirmEnding(str, target) {
    let lengthTarget = target.length;
    let arr = str.split('')
    let endString = arr.slice(arr.length - lengthTarget, arr.length).join('');
    return (endString == target) ? true : false;
}

// console.log(confirmEnding("Bastian", "n"));
// true