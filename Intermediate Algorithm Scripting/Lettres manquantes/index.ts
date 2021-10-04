let fearNotLetter = (str: string): string | undefined => {
    let lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let start = str[0]
    let end = str[str.length - 1]
    let startIndex = lettres.findIndex(value => value === start)
    let endIndex = lettres.findIndex(value => value === end)
    let fullString = lettres.slice(startIndex, endIndex + 1)
    let result = fullString.filter(val => {
        return str.split('').includes(val) !== true
    }).join('')
    return (result.length != 0) ? result : undefined;
}
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));