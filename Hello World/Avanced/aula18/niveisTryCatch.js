const funcao1 = () => {
    console.log('sou a função 1');
    const valor = true;

    try {
        if(valor) {
            //se o valor for verdadeiro, vai instanciar um erro.
            //depois vai balancear para o proximo TCat do escopo.
            throw new Error(`Deu erro no valor`)
        }
    } catch (error) {
        console.error(error);
        //utiliza throw(balançar), para lançar o erro
        //da funcao problemática
        throw error
    }
}

//throw captura o erro e ja chama o tryCatch do escopo acima,
//para ja tratar esse erro

const funcao2 = () => {
    console.log('sou a função 2');

    asdf;
}

const main = () => {
    try {
        //quando quebra uma função, vai direto para o catch e nao volta.
        funcao1();
        funcao2();
        console.log('passou por aqui, bagaceira');
    } catch (error) {
        console.error(error);
    }
}

main();

