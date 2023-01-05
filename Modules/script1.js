export let nome = 'Fábio';


function saudacao(name) {
    let mensagem = `Olá ${name}, isso aqui é um teste de importações e exportações no javascript`;
    console.log(mensagem);
}

saudacao(nome);


const a = 'a';
const b = 'b';
export {a};
export {saudacao};
