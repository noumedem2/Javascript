function findLongestWordLength(str) {
    let strings = str.split(' ');
    let length = 0;
    for (let i = 0; i < strings.length; i++) {
        if (length <= strings[i].length) {
            length = strings[i].length
        }
    }
    return length;
}


const sentence = "The quick brown fox jumped over the lazy dog";
console.log(findLongestWordLength(sentence));