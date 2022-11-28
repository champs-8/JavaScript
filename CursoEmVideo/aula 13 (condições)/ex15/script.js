function verificar(){
    var data= new Date
    var ano=data.getFullYear();
    var formAno=document.getElementById('ano');
    var res= document.querySelector('div#resultado');
    if(formAno.value>ano || formAno.value==0){
        alert('Erro no ano informado, tente novamente.');
    }else{
        var formSex=document.getElementsByName('sex');
        var idade=ano-Number(formAno.value);
        //res.innerHTML=`idade calculada: ${idade} anos.`
        var genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(formSex[0].checked){
            if(idade>=0&&idade<10){
                img.setAttribute('src','crianca-homem.png')//CRIANCA
                genero='criança'
                res.innerHTML=`Detectamos uma ${genero} com ${idade} anos.`
            }else if(idade<=24){
                img.setAttribute('src','menino.png')//MENINO
                genero='menino'
            }else if(idade<=38){
                img.setAttribute('src','homem.png')//HOMEM
                genero='homem'
            }else if(idade<=55){
                img.setAttribute('src','senhor.png')//SENHOR
                genero='senhor'
            }else if(idade>=56){
                img.setAttribute('src','idoso.png')//IDOSO
                genero='ancião'
            }
            if((genero=='menino'||'homem'||'senhor'||'ancião')&&(genero!='criança')){
            res.innerHTML=`Detectamos um ${genero} com ${idade} anos.`
            }
        }else if(formSex[1].checked){
            if(idade>=0&&idade<10){
                img.setAttribute('src','crianca-mulher.png')//CRIANCA
                genero='criança'
            }else if(idade<=24){
                img.setAttribute('src','menina.png')//MENINA
                genero='menina'
            }else if(idade<=38){
                img.setAttribute('src','mulher.png')//MULHER
                genero='mulher'
            }else if(idade<=55){
                img.setAttribute('src','senhora.png')//SENHORA
                genero='senhora'
            }else if(idade>=56){
                img.setAttribute('src','idosa.png')//IDOSA
                genero='anciã'
            }
            if(genero=='criança'||'menina'||'mulher'||'senhora'||'anciã'){
                res.innerHTML=`Detectamos uma ${genero} com ${idade} anos.`
            }
        }
        res.style.textAlign='center'
        res.appendChild(img);//acrescentar um filho
    }
}
