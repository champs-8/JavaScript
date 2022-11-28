const main = () => {
    // tudo que tiver aqui no try
    // o js vai tentar executar, se nao conseguir ele entra no catch
    try { 
        codigo
    } catch (error) {
        console.error(`Deu erro no código\ne o erro é esse: \n\n${error}`);
    }finally {
        console.info('Finalizamos a codação');
    }
}
main()