class User {
    constructor(nom, prenom, age, email, role = "utilisateur") {
        this._nom = nom
        this._prenom = prenom
        this._age = age
        this._email = email
        this._role = role
    }
    propiete = {
        title: "Notre utilisateur "
    }
    presentation = () => {
        return `${this.propiete.title} s'appelle ${this.prenom} ${this.nom} il est agee de ${this.age} a pour role ${this.role} et est disponible a l'addresse electonique ${this.email}`
    }
    set age(age) {
        this._age = age
    }
    get nom() {
        return this._nom
    }
    get prenom() {
        return this._prenom
    }
    get age() {
        return this._age
    }
    get email() {
        return this._email
    }
    get role() {
        return this._role
    }
}
const jean = new User('Noumedem', 'Jean', 13, 'noumedemjean@gmail.com')
const pierre = new User('Noumedem', 'Pierre', 25, 'noumedemtamiflorian@gmail.com')
const jane = new User('Doe', 'Jane', 14, 'janedoe@gmail.com')
const john = new User('Doe', 'John', 30, 'johndoe@gmail.com')
const emil = new User('Noumedem', 'Emil', 14, 'emilnoumedem@gmail.com')
const etoo = new User('Noumedem', 'Etoo', 30, 'etoonoumedem@gmail.com')
let users = [jean, pierre, jane, john, emil, etoo]
users.map((value) => {
    if (value.role === "utilisateur") {
        value.age = 5
    }
})