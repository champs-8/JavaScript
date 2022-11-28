const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolvida'),1500);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>resolve('Promise 2 resolvida'),2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() =>resolve('Promise 3 resolvida'),1000);
});

//promise.all recebe uma lista de todas as promessas
setTimeout(() => Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log(messages);
    }),1300);

//promise.race resolve a primeira da lista que foi resolvida somente.
//promise.race resolve primeiro que o ALL, mesmo que o tempo seja maior
//exceto com tempo determinado entre elas como no exemplo abaixo.
setTimeout(() => Promise.race([promise1, promise2, promise3]).then((messages) => {
    console.log(messages);
}).then(console.log('deu certo')), 2000);