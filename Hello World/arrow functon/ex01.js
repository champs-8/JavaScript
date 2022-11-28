//sempre funções anonomias, nao precisa ter nome
//tratam this de uma maneira diferente

function sum(a, b) {
    return a + b
 }


//precisa ser atribuida a um variavel
const sum = (a, b) => a + b    
//se tiver so uma instrução, o retorno é opicional e nao precisa de chaves

console.log(sum(20, 45));
//========================================


function isAdult(age){
    return age >= 18
}

const isAdult = y => y >= 18

//========================================
function getRandomNumber(){
    return Math.random()
}

const getRandomNumber = () => Math.random() 
//========================================

//funções anonimas em callback
document.addEventListener('click', function() {
    console.log('clicked');
})

document.addEventListener('click', () => console.log('clicked'));

//========================================
