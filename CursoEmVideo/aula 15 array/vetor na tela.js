let num=[5,4,72,13,9,-8]
num.sort()
//====================================================
let pos=0
while(pos<num.length){              
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);      
    pos++
}
console.log('Acabou')
//====================================================
for(let pos=[0];pos<num.length;pos++){
    console.log(num[pos]);
}
console.log('Acabou')
//===================================================
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
console.log('Acabou')
//===================================================
num.indexOf(4)