//ASYNC _ AWAIT 

const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolveu em 5 segundos'), 5000);
});

const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => reject('Resolveu em 1 segundo'), 1000);
});

const resolverdoraDePromise = async () => {
    const resultado1 = await cincoMil().then((res) => {
        console.log(res);
        return res
    }).catch((err) => {
        console.error(err);
    });
    console.log('codigo dos 5k');

    const resultado4 = await mil().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
        return err
    });
    console.log('codigo dos 1k');


    console.log(`${resultado1}\n${resultado4}`);
    //dessa forma só vai mostrar 'object promise, sem usar o async
    //await é esperar.
}

resolverdoraDePromise();