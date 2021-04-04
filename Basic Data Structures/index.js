/**
 * les tableaux sont mutables .
 * les fonctions pop() et shift() suprime en renvoyant l'element suprimer
 * les fonctions push() et unshift() ajoute des elements en renvoyant la longueur du nouvelle tableau
 * splice()
 * slice()
 * indexOf()
 * spread
 */

/**
 * Suprimer un element a la fin ou au debut d'un tableau
 */
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
// console.log(greetings);
// ["whats up?", "hello"]
greetings.shift()
// console.log(greetings);
// ["hello"]

/**
 * Supprimer des éléments à l'aide de splice(indexOuOnCommence,nbrEltASuprimer)
 * Ou ajouter 
 */
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
// console.log(array);
//  ["I", "am", "feeling"]
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);
// [10, 11, 12, 13, 14, 15]

/**
 * Extraire les elements d'un tableau slice(i1,i2)
 *  le premier est l'indice auquel commencer l'extraction,
 *  et le second est l'indice auquel arrêter l'extraction
 */
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
//  console.log(todaysWeather);
//  ["snow", "sleet"]

/**
 * Extraire en utilisant les Spreads de ES6
 */
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = [...thisArray]
//  console.log(thatArray);
//  ["sage", "rosemary", "parsley", "thyme"]

thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// console.log(thatArray);
// ["basil", "cilantro", "sage", "rosemary", "parsley", "thyme", "coriander"]

/**
 * Verifier la presence d'un element avec indexOf()
 * indexOf()prend un élément comme paramètre, et lorsqu'il est appelé, 
 * il renvoie la position, ou l'index, de cet élément, ou -1si l'élément n'existe pas sur le tableau.
 */

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// console.log(
//     fruits.indexOf('dates'),
//     fruits.indexOf('oranges'),
//     fruits.indexOf('pears')
// );
// -1 2 1
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }
    }
    // Only change code above this line
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/**
 * Ajouter des paires clé-valeur aux objets JavaScript
 */
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};
tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair color'] = 'dyed orange';
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
// console.log(tekkenCharacter);
// {
//     eye color: "brown"
//     fightingStyle: "Tae Kwon Doe"
//     hair color: "dyed orange"
//     human: true
//     origin: "South Korea"
//     player: "Hwoarang"
// }
/**
 * Modifier un objet imbriqué dans un objet
 */
let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8
        }
    }
};
nestedObject.data.onlineStatus.busy = 10;
// console.log(nestedObject.data.onlineStatus.busy);
// 10
/**
 * Accéder aux noms de propriétés avec la notation entre crochets
 * 
 */
// console.log(nestedObject['date']);
// December 31, 2016
/**
 * Utilisez le mot-clé de suppression pour supprimer les propriétés de l'objet
 */
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// delete foods.apples
// console.log(foods);
// { oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }

/**
 * Vérifier si un objet a une propriété
 * En utilisant hasOwnProperty ou in
 */
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};
// console.log(
//     users.hasOwnProperty('Alan'),
//     'Alan' in users
// );
// true true
/**
 * Itérer à travers les clés d'un objet avec une instruction for ... in
 */
// for (let user in users) {
//     console.log(user);
//   }
//   Alan
// Jeff
// Sarah
// Ryan
function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
// console.log(countOnline(users));
// 4

/**
 * recuperer les cles d'un object
 */
// console.log(Object.keys(users));
// "Alan", "Jeff", "Sarah", "Ryan"]
