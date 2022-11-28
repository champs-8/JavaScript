function contar(){
    var ini=document.getElementById('inicio')
    var final=document.getElementById('fim')
    var pula=document.getElementById('passo')
    var contagem=document.querySelector('div#contagem')
    //var num=document.querySelector('div#numeros')
    if(inicio.value.length==0||fim.value.length==0||passo.value.length==0){
        contagem.innerHTML=('Impossível contar');
        alert('ERRO! Verifique os valores desejados. Idiota!');
    }else{
        contagem.innerHTML='Contando: <br>'
        let inicio=Number(ini.value);
        let fim=Number(final.value);
        let passo=Number(pula.value)

        //passo invalido
        if(passo<=0){
            alert('Valor do passo inválido! (Considerando Passo com valor 1.)')
            passo=1
        }
        //contagem crescente
        if(inicio<fim){
            for(let cont=inicio;cont<=fim;cont+=passo){
                contagem.innerHTML+=`${cont} 👉🏻 ` // \u{1F449}	
            }
        //contagem decrecente
        }else if(inicio>fim){
            for(let cont=inicio; cont>=fim;cont-=passo){
                contagem.innerHTML+=`${cont} 👉🏻 `
            }
        //mesmo valor
        }else if(inicio==fim){
            contagem.innerHTML+=`${inicio}`;
        }
        contagem.innerHTML+='✅';
    }
}

