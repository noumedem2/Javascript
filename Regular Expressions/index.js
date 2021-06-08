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
myRegex = /[^aeiou0-9]/gi; // Change this line
result = quoteSample.match(myRegex); // Change this line
//  console.log(result)
//  ['', 'b', 'l', 'n', 'd', '', 'm', 'c', '.' ]
/**
 * Faire correspondre les caractères qui apparaissent une ou plusieurs fois
 */
let difficultSpelling = "Mississippi";
myRegex = /ss+/g; // Change this line
result = difficultSpelling.match(myRegex);
// console.log(result)
// ['ss', 'ss']

/**
 * Faire correspondre les caractères qui se produisent zéro fois ou plus
 */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh"
// Only change code below this line
let chewieRegex = /Aaaaaaaaaaaaaaaa*/g; // Change this line
// Only change code above this line

result = chewieQuote.match(chewieRegex);
//  console.log(result)
//  ["Aaaaaaaaaaaaaaaa"]

// Faire correspondre toutes les lettres et tous les chiffres

/**
 * \w => [A-Za-z0-9_]
 * \W => l'oppose de [A-Za-z0-9_]
 */


quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
result = quoteSample.match(nonAlphabetRegex).length;
//  result == 6
quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
result = quoteSample.match(alphabetRegexV2).length;
// result == 31

/**
 * Faire correspondre tous les nombres
 * [0-9] => \d
 */
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
result = movieName.match(numRegex).length;
// console.log(result); => 4
/**
 * Faire correspondre tous les non-numéros
 * [^0-9] => \D
 */
movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
result = movieName.match(noNumRegex).length;
// console.log(result);  => 17
/**
 * Restreindre les noms d'utilisateur possibles
 * Les noms d'utilisateur ne peuvent utiliser que des caractères
 * alphanumériques.
 *Les seuls chiffres du nom d'utilisateur 
 *doivent être à la fin. Il peut y en avoir zéro ou plus à 
 *la fin. Le nom d'utilisateur ne peut pas commencer par le numéro.
 *Les lettres du nom d'utilisateur peuvent être en minuscules et en majuscules.
 * Les noms d'utilisateur doivent comporter au moins deux 
 * caractères. Un nom d'utilisateur à deux caractères ne peut utiliser 
 * que des lettres de l'alphabet comme caractères.
 */

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
result = userCheck.test(username);
/**
 * Faire correspondre les espaces
 */
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
//  [" ", " "]

/**
 * Faire correspondre les caractères non blancs
 */
whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // 32

/**
 * Spécifiez le nombre supérieur et inférieur de correspondances
 */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
result = ohRegex.test(ohStr); //True

/**
 * Spécifiez uniquement le nombre inférieur de correspondances
 * 
 */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/i; // Change this line
result = haRegex.test(haStr);

/**
 * Spécifiez le nombre exact de correspondances
 */
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
result = timRegex.test(timStr);
// console.log(result); => True
/**
 * Vérifier tout ou rien
 */

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
//  console.log(result) => True

/**
 * Anticipation positive et négative
 * x(?=y) 
 * x(?!y)
 */
// Utilisez des anticipations dans le pwRegexpour faire correspondre les mots de
//  passe de plus de 5 caractères et comportant deux chiffres consécutifs.
let sampleWord = "astronaut";
let pwRegex = /(?=\D)(?=\D*\d{2})/i; // Change this line
let result = pwRegex.test(sampleWord);
// console.log(result); => true