// const uniteUnique = (...arr) => {
//     return Array.from(new Set([...arr].map(val => {
//         return val.join(',').split(',')
//     }).join(',').split(',').map(val => parseInt(val))))
// }
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var uniteUnique = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return Array.from(new Set(__spreadArray([], arr, true).map(function (val) {
        return val.join(',').split(',');
    }).join(',').split(',').map(function (val) { return parseInt(val); })));
};
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
