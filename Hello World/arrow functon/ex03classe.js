class Person {
    constructor(name) {
        this.name = name
    }

    printNameFunction() {
        setTimeout(function() {
            console.log(this.name);
        }, 100);
    }

    printNameArrowFunction() {
        setTimeout(() => console.log(this.name), 100);
    }
}
const creature = new Person('Rumpelstriltskin')

creature.printNameFunction()
creature.printNameArrowFunction()