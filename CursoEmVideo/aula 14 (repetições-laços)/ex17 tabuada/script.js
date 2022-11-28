var num=document.querySelector('div#valores');
var val=document.getElementById('num')
var col1=document.querySelector('#esquerda')
var col2=document.querySelector('#direita')
num.style.display='none'
function calcular(){
    num.style.display='block'
    //valores que não serão calculados
    col1.innerText=""
    col2.innerText=""
    if(val.value.length==0){
        alert('Valor inexistente, idiota!')
    }else if(val.value>1000||val.value<-1000){
        alert('Somente valores entre -1000 e 1000.')
        val.value=0
    }
    var valores=Number(val.value);
    var cont=1
    while(cont<=5){
        col1.innerHTML+=`${valores} X ${cont} = ${valores*cont}<br>`
        cont++
    }
    while(cont>5&&cont<=10){
        col2.innerHTML+=`${valores} X ${cont} = ${valores*cont}<br>`
        cont++
    }
}