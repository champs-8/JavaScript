//criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Fábio';

    if(nome === 'Fábio') {
        resolve('Usuário Fábio encontrado.')
    }else{
        reject('O Usuário Fábio não foi encontrado.')
    }
});

myPromise.then((data) =>{
    console.log(data);
});

//encadeamento de then

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Irineu';

    if(nome === 'Irineu') {
        resolve('Usuário Irineu encontrado.')
    }else{
        reject('O Usuário Irineu não foi encontrado.')
    }
});

myPromise2.then((data) =>{      //executou a promise, manipulou os dados
    return data.toLowerCase()   //transformando em caixa baixa, encadeou outro then
})                              //com o retorno modificado e mandou exibir
.then((stringMod) => {
    console.log(stringMod);
})

//Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'João';

    if(nome === 'Irineu') {
        resolve('Usuário Irineu encontrado.')
    }else{
        reject('O Usuário Irineu não foi encontrado.')
    }
});

myPromise3.then((data) => {
    console.log(data);
}).catch((erro) => {
    console.log(`Aconteceu o erro: ${erro}`);
});//catch é pegar


//Resolver varias promises
const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 está ok!')
    }, 2000);
});

const p2 = new Promise ((resolve, reject) => {
    resolve("p2 está ok!");
});

const p3 = new Promise ((resolve, reject) => {
    resolve("p3 está ok!");
});


//metodo da classe promise, parar pegar todas promises que
//quer executar, encadeou com um then para poder receber os dados
//e imprimiu
const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data); //esperar todas as promessas serem resolvidas para ser executado.
})



console.log('Depois do All');//vai ser executado primeiro que todos, porque é o mais rapido


//varias promessas com race
const p4 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 está ok!')
    }, 3000);
});

const p5 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("p5 está ok!");
    }, 2000)
});

const p6 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("p6 está ok!");
    }, 2000);
});

// de forma semelhante ao ALL, mas com o RACE quem for mais rapido
// a resposta, será exibida primeiro
// the return more fast, to displayed first a end the method.

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
})


//fetch request na API do GitHub
//fetch API

const userName = 'champs-8'

//fetch é buscar

//primero argumento sera a URL
//segundo argumento sera parametros para requisição

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => { //resposta
    console.log(response);
    console.log(typeof response); //do que é composta a resposta
    return response.json()
}).then((data) => {
    console.log(data);
    console.log(`O id do usuário é ${data.id}`);
}).catch((erro) => {
    console.log(`Houve algum erro: ${erro}`);
})
