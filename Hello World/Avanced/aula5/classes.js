//JS nao existem classes
//tem um assunto sintatico, abstração da linguagem
class Carro {
    constructor(marca, ano, modelo) {
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
    }
}

const carro1 = new Carro('Volkswagem', '2012', 'Saveiro Cross');
const carro2 = new Carro('Ferrari', '2019', 'Itália');

console.log(carro1, carro2); // objeto completo
console.log(carro1.modelo); //saveiroCross