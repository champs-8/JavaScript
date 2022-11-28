let num=document.querySelector('input#num');
let lista=document.querySelector('select#numsel');
let res=document.querySelector('div#res');
let valores=[]

function isNumero(n){
    if(Number(n)>=1&&(Number(n)<=100)){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value)&&!inLista(num.value,valores)){
        valores.push(Number(num.value));
        let option=document.createElement('option')
        option.text=`O valor ${num.value} foi adicionado`
        lista.appendChild(option);
        option.style.backgroundColor='rgba(31, 255, 23, 0.692)'//verde
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    console.log(valores);
    num.value=''
    num.focus()
    if(res.value>0||'0'){
        res.innerHTML=''
    }
}
function remover(){
    if(isNumero(num.value)&&inLista(num.value,valores)==true){
        valores=valores.filter((item)=>item!=Number(num.value));//remover item especifico no array
        let option=document.createElement('option')
        option.text=`O valor ${num.value} foi removido`
        lista.appendChild(option);
        option.style.backgroundColor='rgba(255, 0, 0, 0.52)' //vermelho
    }else{
        alert('Valor não encontrado na lista.');
    }
    console.log(valores);
    num.value=''
    num.focus()
    if(res.value>0||'0'){
        res.innerHTML=''
    }
}
function finalizar(){
    if(valores.length==0){
        alert('Por favor informe um valor.')
        res.style.visibility='hidden'
    }else{
        res.innerHTML+=`\u{27A4} Ao todo temos ${valores.length} números cadastrados.<br>`
        res.innerHTML+=`\u{27A4} O maior valor foi ${Math.max.apply(null,valores)}.<br>`; //max value
        if(valores.length>1){
            res.innerHTML+=`\u{27A4} O menor valor foi ${Math.min.apply(null,valores)}.<br>`; //min value
        }
        let soma=0
        for(var c=0;c<valores.length;c++){  //calculo para soma dos valores do array
            soma+=valores[c]
        }
        res.innerHTML+=`\u{27A4} A soma dos valores é ${soma}.<br>`;// soma dos valores
        res.innerHTML+=`\u{27A4} A média dos valores é ${(soma/valores.length).toFixed(2)}.<br>`;//média
        res.style.visibility='visible'
    }
    console.log(valores.length);
}