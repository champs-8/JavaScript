//get value box-text
var numero=document.getElementById('numero')
var selecionados=document.querySelector('#selecionados')
var par=document.querySelector('#par');
var impar=document.querySelector('#impar');
var primo=document.querySelector('#primo');
var inteiro=document.querySelector('#inteiro');
var real=document.querySelector('#real');
while(selecionados.value.length==0){
    selecionados.style.display='none'
}
//function calculate
function descobrir(){   
    selecionados.style.display='block'
    var n=[Number(numero.value)];
    selecionados.innerHTML+=`${n} `
    console.log(numero.value);    
//par
    if(n%2==0){
       par.innerHTML+=`<br>${n}`
    };
//Impar
    if(n%2!=0){
        impar.innerHTML+=`<br>${n}`
    };
//Primo
    if(n/n==1&&n/1==n&&n%2!=0&&n%3!=0&&n%5!=0||n==2||n==3||n==5){
        primo.innerHTML+=`<br>${n}`
    }
    numero.value=''
}
console.log(n[3]);

//function change float-int
function TrocaRealInteiro(){
    var real=document.querySelector('#troca-real-inteiro')
    selecionados.innerHTML= 'ok'
}