const umaPromisse = new Promise((resolve, reject) => { //pode acontecer 3 casos, aceitamento, pendencia ou rejeitado.
    let soma = 1 + 1;
    if(soma === 2) {
        resolve('Tudo certo aqui')
    }else{
        reject('Deu ruim em mano')
    }

});
console.log('esperando promisse...');

umaPromisse.then((resultado) => {
    console.log(`Valor do then: ${resultado}`)
}).catch((erro) => {
    console.error(`Valor do catch: ${erro}`)
}).finally(() => {
    console.log(`Independente do resultado eu sempre estarei aqui.`);
})

//THEN
//é quado a promisse deu resolvida

//CATCH
//se deu reject entra aqui no catch

//FINALLY
//se deu rejcet ou resolve ele será sempre executado.

