class Dev {
 constructor(nome, idade, linguagem, tipoDev){
    this.nome = nome;
    this.idade = idade;
    this.linguagem = linguagem;
    this.tipoDev = tipoDev;
 }   
 saudacao() {
    console.log(`Oi, sou DEV ${this.tipoDev}, chamo-me ${this.nome}, tenho ${this.idade} anos e trabalho com ${this.linguagem}. \n\n`);
 }
}

class FrontEnd extends Dev{ //herdando do pai Dev.
    constructor(nome, idade, linguagem, tipoDev, framework) {
      super(nome, idade, linguagem, tipoDev) // super() serve para fazer referencia ao construtor da classe pai mesmo que nao passe nenhum parametro.
      this.framework = framework;
    }   
}

class BackEnd extends Dev{
    constructor(nome, idade, linguagem, tipoDev, database){
      //os dadoas 'nome', 'idade', 'linguagem' e 'tipoDev' sao herdados da classe pai DEV e o 'database' é inserido ao filho backend.
      super(nome, idade, linguagem, tipoDev)
      this.database = database
    }   
}

const frontEnd1 = new FrontEnd('Fábio', '21', 'JavaScript', 'FronEnd','React');
const backEnd1 = new BackEnd('Jão', '28', 'C#','BackEnd', 'MySQL');


console.log(frontEnd1);
frontEnd1.saudacao();

console.log(backEnd1);
backEnd1.saudacao();
