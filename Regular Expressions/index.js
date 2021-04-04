/**
 * Expression reguliers de base
 */
let text = "je suis un texte"
let regex = /texte/
let result = regex.test(text)
// console.log(result);
// true

/**
 * Utilisation des alternatives
 */
text = "James has a pet cat.";
regex = /cat|dog|fish/
result = regex.test(text)
// console.log(result);
// true

/**
 * Utilisation des  drapeaux pour gerer les majuscules et minuscules
 */
text = "JeaN";
regex = /jean/i
result = regex.test(text)
//  console.log(result)
//  true

/**
 * Utilisation de la methode  mathc() des chaines de caractecre 
 * Renvoi null si le result l'expression n'est pas dans la chaine
 * Ou un tableau contenant tout la chaine et la chaine concernamt le  regex en question
 */
text = "je suis pierre Pierre";
regex = /pierre/
result = text.match(regex)
//  console.log(result);
//  ['pierre']
text = "je suis pierre Pierre"
regex = /pierre/g
result = text.match(regex)
// console.log(result);
// ['pierre']
text = "je suis pierre Pierre"
regex = /pierre/gi
result = text.match(regex)
// console.log(text.match(regex));
// ["pierre", "Pierre"]

/**
 * Période générique
 */
text = "je suis pierre Pierette"
regex = /pi./gi
result = text.match(regex)
//  console.log(result);
//  ["pie", "Pie"]'
text = "je suis pierre"
regex = /pi./gi
result = regex.test(text)
// console.log(result);
// true
/**
 * Utilisation de multiple posibilite
 */
text = "big bag bug bog"
regex = /b[auo]g/g
result = text.match(regex)
//  console.log(result);
//  ["bag", "bug", "bog"]
/**
 * Correspondre aux lettres de l'alphabet
 */
 text = "big bag bug bog"
 regex = /b[a-z]g/g
 result = text.match(regex)
//  console.log(result);
//  ["big", "bag", "bug", "bog"]
/**
 * Correspondre aux lettres de l'alphabet et les nombres
 */
 let jennyStr = "Jenny8675309";
 let myRegex = /[a-z0-9]/ig;
 result = jennyStr.match(myRegex);
//  console.log(result);
//  ["J", "e", "n", "n", "y", "8", "6", "7", "5", "3", "0", "9"]
/**
 * les jeux de caractères annulés 
 */
 let quoteSample = "3 blind mice.";
 let myRegex = /[^aeiou0-9]/gi; // Change this line
 let result = quoteSample.match(myRegex); // Change this line
//  console.log(result)
//  ['', 'b', 'l', 'n', 'd', '', 'm', 'c', '.' ]
/**
 * Faire correspondre les caractères qui apparaissent une ou plusieurs fois
 */
let difficultSpelling = "Mississippi";
let myRegex = /ss+/g; // Change this line
let result = difficultSpelling.match(myRegex);
// console.log(result)
// ['ss', 'ss']

/**
 * Faire correspondre les caractères qui se produisent zéro fois ou plus
 */
 let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh"
 // Only change code below this line
 let chewieRegex = /Aaaaaaaaaaaaaaaa*/g; // Change this line
 // Only change code above this line
 
 let result = chewieQuote.match(chewieRegex);
//  console.log(result)
//  ["Aaaaaaaaaaaaaaaa"]
