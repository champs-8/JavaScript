function carregar(){
    var msg=document.getElementById('msg')
    var img=document.getElementById('imagem')
    var saudacao=document.getElementById('saudacao')
    var data=new Date()
    var hora=data.getHours()
    //var hora=18
    var minutos=data.getMinutes()
    //var minutos=14
    if(minutos<10){
        minutos=0+`${minutos}`
    }
    if(hora<10){
        hora=0+`${hora}`
    }
    msg.innerHTML=`Agora são ${hora}:${minutos} horas.`;
    if(hora>=0&&hora<6){
        saudacao.innerHTML='VAMO PRO AFTER!'
        img.src='madrugada.png'
        document.body.style.background='#19262c'
    }else if(hora>=6&&hora<12){
        saudacao.innerHTML='BOM DIA CORNO MANSO!'
        img.src='manha.png'
        document.body.style.background='#aca67f'
    }else if(hora>=12&&hora<=16){
        saudacao.innerHTML='CALMA QUE TA QUASE ACABANDO O EXPEDIENTE'
        img.src='tarde.png'
        document.body.style.background='#8c5f5c'
    }else if(hora==17&&(minutos>=0&&minutos<=44)){
        saudacao.innerHTML='CALMA QUE TA QUASE ACABANDO O EXPEDIENTE'
        img.src='tarde.png'
        document.body.style.background='#8c5f5c'
    }else if(hora==17&&minutos>44){
        saudacao.innerHTML='OLHA QUE VISTA MARAVILHOSA!'
        img.src='por-do-sol.png'
        document.body.style.background='#a03d1d'
    }else if(hora==18&&(minutos>=0&&minutos<=15)){
        saudacao.innerHTML='OLHA QUE VISTA MARAVILHOSA!'
        img.src='por-do-sol.png'
        document.body.style.background='#a03d1d'
    }else if(hora==18&&(minutos>15)){
        saudacao.innerHTML='PROCUREI REMÉDIO NA VIDA NOTURNA!'
        img.src='noite.png'
        document.body.style.background='#083974'
    }else if(hora>=19&&hora<=24){
        saudacao.innerHTML='PROCUREI REMÉDIO NA VIDA NOTURNA!'
        img.src='noite.png'
        document.body.style.background='#083974'
    }
}

