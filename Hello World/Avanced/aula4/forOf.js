const listaEstados = ['RJ', 'SP', 'MG'];
const str = 'Fábio vulgo CHAMPS'


for(let estado of listaEstados){
    if (estado == 'MG'){
        console.log(estado +' é um estado brasileiro onde mora '+str);
    }
    else{
    console.log(estado +' é um estado brasileiro');
    }
}

