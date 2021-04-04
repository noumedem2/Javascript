function truncateString(str, num) {
    let arr = str.split('')
    console.log(arr.length <= num);
    if (arr.length <= num) {
        return "ok"
    } else {
        return arr.slice(0, num).join('') + "...";
    }
}

const sentence = "A-tisket a-tasket A green and yellow basket";
// console.log(truncateString(sentence, 8));
// A-tisket
// console.log(truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length)
// );
// A-tisket a-tasket A green and yellow basket