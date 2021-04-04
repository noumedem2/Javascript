/**
 * Vous avez maintenant vu deux types de propriétés: les propriétés propres et les prototype propriétés.
 * Les propriétés propres sont définies directement sur l'instance d'objet elle-même.
 *  Et les prototypepropriétés sont définies sur le prototype.
 * hasOwnProperty -> crow.hasOwnProperty('color')
 */





/**
 * Créer un objet JavaScript de base
 */
let duck = {
    name: "Aflac",
    numLegs: 2
};
/**
 *Utiliser la notation par points pour accéder aux propriétés d'un objet
 */
// console.log(duck.name);
// Aflac

/**
 * Créer une méthode sur un objet
 */
duck = {
    name: "Aflac",
    numLegs: 2,
    sayName() { return "The name of this duck is " + duck.name + "."; }
};
// console.log(duck.sayName());
// The name of this duck is Aflac.
/**
 * les constructeurs commence toujours en majuscule
 */
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}
/**
 * cree un object a l'aide d'un contructeur
 * Comme tout autre objet, ses propriétés sont accessibles et modifiables:
 */
let blueBird = new Bird()
/**
 * Étendre les constructeurs pour recevoir des arguments
 */
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let cardinal = new Bird("Bruce", "red");
/**
 * Vérifier le constructeur d'un objet avec instanceof
 */
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let crow = new Bird("Alexis", "black");
let result = crow instanceof Bird;
// console.log(result);
// true
result = 3 instanceof Bird;
// console.log(result);
// false
/**
 * Voir si quelque chose est propriete d'un objet
 */

// console.log(crow.hasOwnProperty('name'));
// true
// console.log(crow.hasOwnProperty('color'));
// true
// console.log(crow.hasOwnProperty('myvar'));
// false
/**
 * Utilisez les prototypes pour ajouter une propriete
 */
function User(nom) {
    this.nom = nom
}
let pierre = new User('pierre')
// console.log(pierre);
// User.prototype.age = 12
// console.log(pierre.age);
// 12
/**
 * Acceder au constructeur d'un object
 */
class Users {
    constructor(name) {
        this.name = name
    }
    sayName = () => {
        return this.name
    }
}
pierre = new Users('pierre')
// console.log(pierre);
// console.log(pierre.constructor);
/**
 * Changer le prototype en nouvel objet
 */
Bird.prototype.describe = function () {
    return ("My name is " + this.name);
}
Bird.prototype.eat = function () {
    return ("nom nom nom");
}
// console.log(crow.numLegs);
// 2
// console.log(crow.eat())
// nom nom nom
// console.log(crow.describe());
// My name is Alexis
/**
 * Hériter des comportements d'un supertype
 */
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype);; // Change this line
/**
* Définir le prototype de l'enfant sur une instance du parent
*/
Bird.prototype = Object.create(Animal.prototype);
/**
 * Réinitialiser une propriété de constructeur héritée
 */
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Dog.prototype.constructor = Dog
Bird.prototype.constructor = Bird

duck = new Bird();
beagle = new Dog();
/**
 * Ajouter des méthodes après l'héritage
 */
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    return ("Woof!");
};
// Only change code above this line

beagle = new Dog();
// console.log(beagle.bark());
// Woof!
/**
 * Remplacer les méthodes héritées
 */
Dog.prototype.bark = () => {
    return "Woof! Woof!"
}
// console.log(beagle.bark());
// Woof! Woof!
/**
 * Utiliser un mixin pour ajouter un comportement commun entre des objets non liés
 */
let flyMixin = function (obj) {
    obj.fly = function () {
        return ("Flying, wooosh!");
    }
};
let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
console.log(bird.fly());
console.log(plane.fly());
// Flying, wooosh!
// Flying, wooosh!
/**
 * Utiliser les closures pour protéger les propriétés d'un objet contre toute modification externe
 */
function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight
    }
}
/**
 * Comprendre l'expression de fonction immédiatement appelée (IIFE)
 */
// (function () {
//     console.log("Chirp, chirp!");
// })();
// Chirp, chirp!
/**
 * Utiliser un IIFE pour créer un module
 */
let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})();
// motionModule.glideMixin(duck);
// duck.glide();
// Gliding on the water