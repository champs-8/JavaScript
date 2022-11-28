const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function() {
        console.log(this.som)
    }
}

const gato = {
    tipo: 'gato',
    som: 'miado'
}

Object.setPrototypeOf(gato, animal) 
//como se fosse uma simulação de herança,
//está dizendo que o obejto que é 'pai' de gato é animal.
gato.emitirSom()


const gatoRaivoso = {
    tipo: 'gatoRaivoso',
    miarForte: function() {
        console.log(this.som.toUpperCase());
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte();
