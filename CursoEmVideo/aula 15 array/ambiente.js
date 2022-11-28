let num=[5,8,2,4,3]
num[5]=6

num.push(7)    //acrescenta valor ao ultimo elemento do array
num.sort()      //ordem crescente, do primeiro numero
num.length      //quantidade de elementos no array


console.log(`O nosso vetor tem ${num.length} posições`);
console.log(num);
console.log(num[0]);

let pos=num.indexOf(5)
    if(pos==-1){
        console.log('Não foi encontrada posição para esse valor');
    }else{
        console.log(`O valor está na posição ${pos}.`)
    }
