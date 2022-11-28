let num=[5,8,4]
console.log(num[0]);
//=================
let amigo={
nome:'José',
sexo:'M',
peso:75.4,
engordar(p){
    console.log('engordou');
    this.peso+=p
}}
amigo.engordar (2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg;`)