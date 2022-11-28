const statusPantera = '';

function isHappyPantera(callback, errorCallback) { 
    switch (statusPantera) {    //switch é escolher
        case 'feliz':
            callback({
                mensagem: 'FELIZ'
            });
            break;
        case 'entediado':
            errorCallback({
                mensagem: 'ENTEDIADO'
            });
            break;
        case 'triste':
            errorCallback({
                mensagem: 'TRISTE'
            });
            break;
        default:
            errorCallback({
                mensagem: 'EMOCIONALMENTE INDEFINIDO'
            });
    }
}

isHappyPantera( //response e erros sao tratativas de callback
    (response) => console.log(`Tudo certo, o gato está ${response.mensagem}`),
    (error) => console.error(`Deu ruim, o gato está ${error.mensagem}`)
);

//=======================================================================
//fazendo a mesma função mas com promise


const statusChopin = 'feliz';

const isHappyChopin = new Promise((resolve, reject) => { 
    switch (statusChopin) {    //switch é escolher
        case 'feliz':
            resolve({
                mensagem: 'FELIZ'
            });
            break;
        case 'entediado':
            reject({
                mensagem: 'ENTEDIADO'
            });
            break;
        case 'triste':reject
            reject({
                mensagem: 'TRISTE'
            });
            break;
        default:
            reject({
                mensagem: 'EMOCIONALMENTE INDEFINIDO'
            });
    }  
})
//dá para continuar com o then mesmo tendo um catch entre eles.




isHappyChopin.then((response) => {
    console.log('No primeiro Then');
    return {mensagem: `${response.mensagem}`}
}).then((response) => {
    throw new Error('DEU ERRO');
}).catch((error) => {
    console.error(`${error.message}`)
}).then((response) => {
    console.log('No terceiro Then');
    console.log(`Tudo certo, o dog está ${response.mensagem}`);
}).catch((error) => {
    console.error(`Deu ruim, o dog está ${error.mensagem}`);
});
