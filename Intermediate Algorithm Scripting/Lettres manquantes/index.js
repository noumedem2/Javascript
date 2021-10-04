var fearNotLetter = function (str) {
    var lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var start = str[0];
    var end = str[str.length - 1];
    var startIndex = lettres.findIndex(function (value) { return value === start; });
    var endIndex = lettres.findIndex(function (value) { return value === end; });
    var fullString = lettres.slice(startIndex, endIndex + 1);
    var result = fullString.filter(function (val) {
        return str.split('').includes(val) !== true;
    }).join('');
    return (result.length != 0) ? result : undefined;
};
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
