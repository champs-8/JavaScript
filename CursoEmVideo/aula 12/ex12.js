var agora = new Date()
var hora= agora.getHours()
console.log(`Agora são ${hora} horas`)
if(hora>=6&&hora<12){
    console.log(`Bom dia! Bom dia! O sol ja nasceu na fazendinha.`)
}else if(hora>=12&&hora<18){
    console.log(`Boa tarde, filho de uma meretriz.`)
}else if(hora>=18&&hora<=23.59){
    console.log(`Boa noite para voce, P*ta.`)
}else if(hora>=0&&hora<6){
    console.log(`Boa madrugada seu nóia.`)
}