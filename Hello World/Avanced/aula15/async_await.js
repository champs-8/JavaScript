//ASYNC _ AWAIT 

const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolveu em 5 segundos'), 5000);
});

const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolveu em 1 segundo'), 1000);
});

const quinhetos = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolveu em meio segundo'), 500);
});

const cem = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolveu em 100ms'), 100);
});


const resolverdoraDePromise = async () => {
    const resultado1 = await cincoMil();
    console.log('codigo dos 5k');
    const resultado2 = await quinhetos();
    console.log('codigo dos 500ms');
    const resultado3 = await cem();
    console.log('codigo dos 100ms');
    const resultado4 = await mil();
    console.log('codigo dos 1k');
    console.log(`${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`);
    //dessa forma só vai mostrar 'object promise, sem usar o async
    //await é esperar.
}

resolverdoraDePromise();