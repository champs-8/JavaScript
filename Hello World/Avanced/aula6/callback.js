const saudacao = (nome) => alert(`Olá ${nome}`);

const processamento = (callback) => {
    const nome = prompt('Digite seu nome: '); //será executada depois dessa linha
    callback(nome)
}
processamento(saudacao);


const callback = (e) => alert(`Aconteceu um evento do tipo ${e.type}`)
window.addEventListener('click', callback);



const somar = (x, y) => x + y; 
const calcular = (x, y, computar) => computar(x, y);
const resultado = calcular(20, 30, somar);
console.log(resultado);



const arr = [1, 2, 3];
const newArr = arr.map(x => x + x);
console.log(arr);
console.log(newArr);