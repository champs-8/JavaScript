console.log('Olá mundo!');
var minhaVar = 'Fábio';
console.log(minhaVar);

if(true) {
    var exposta = 'exposta';
    let naoExposta = 'naoExposta';
}
console.log(exposta);

for(let i = 0; i <= 10; i++) {
    var j = i;
}
// console.log(i, j);
//prestar atenção com escopo da variavel


// const pode ser minupulado mas nao reatribuido.
// let pode ser minupulado e reatruibuido;

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

arr.pop(); //remove o ultimo elemento do array
console.log(arr);



const obj = {a:1, b:2, c:3};
console.log(obj);
delete obj.c //revomer elementos no objeto
console.log(obj);

