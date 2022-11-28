

//EXERCICIO DE FUNÇÕES QUE TENTEI FAZER SOZINHO

var num=document.querySelector('input#num')
var div1=document.querySelector('div#div1')
var div2=document.querySelector('div#div2')
let valores=[]

function adicionar(){
    var selecionados=document.querySelector('select#numsel')
    var numero=Number(num.value);
    if(numero<1||numero>100||numero.length==0){
        alert('Número já adicionado ou incorreto.')
    }else{
        let opcao=document.createElement('option')
        opcao.text=`O valor ${numero} foi adicionado`
        selecionados.appendChild(opcao)
    }
    num.value=''
}
console.log(valores);


function finalizar(){
    var res=document.createElement('div')
    res.setAttribute('id','res')
    div2.appendChild(res)
}