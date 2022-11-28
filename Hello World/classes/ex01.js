//function person(name) {
//    this._name = name
//}
//
//var person = new person('Pedro')
//console.log(person._name);

class Person {
    constructor(name){
        this.name = name
    }

    set name(string) {
        this.name = string  //precisa de um parâmetro
    }
    get name() {
        return this.name//nao precisa ter parâmetro
    }

    walk() {
        return `${this.name} está querendo falar com você.`
    }
}

let person = new Person('Fábio')
console.log(person.walk());