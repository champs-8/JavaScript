//variaveis
const menu = document.getElementById('menu');
const btnMenu = document.getElementById('btnMenu');
const linksMenu = document.getElementsByClassName('linkMenu');
const cadTic = document.getElementById('cadTic');

//configurando o abrir do menu css
menu.style.display = 'none'



btnMenu.addEventListener('click', ()=> {
    menu.classList.toggle('menu');

    //aqui vai fazer uma passagem por cada item da coleção de <a>
    //e vai adicionar ou retirar o diplay.
    if(menu.classList.contains('menu') == false) {
        for (a of linksMenu) {
            a.style.display = 'none';
        }
    }else{
        menu.style.display = 'block'
        for (a of linksMenu) {
            a.style.display = 'flex';
        }
    }
})



//interação de cada negociação
class Ticker {
    constructor(){
        this.arrayTickers = [];
        this.idTicker = 0
    }


    //vai dar inicio as logicas por aqui
    cadastrar(){
        menu.style.display = 'none'
        let divCadastro = document.querySelector('.cadastrar');
        divCadastro.style.display = 'block';

        this.lerDados();
    }


    //ler os dados passados pelo usuario sobre a negociação
    lerDados(){
        let ticker = {}
        ticker.codigo = document.getElementById('ticker').value;
        ticker.empresa = document.getElementById('empresa').value;
        ticker.cnpj = document.getElementById('cnpj').value;

        if(document.getElementById('compra').checked) {
            ticker.cv = document.getElementById('compra').value;
        }else if(document.getElementById('venda').checked) {
            ticker.cv = document.getElementById('venda').value;
        }
        ticker.data = document.getElementById('dataNeg').value;
        ticker.quantidade = document.getElementById('qtda').value;
        ticker.vUnit = document.getElementById('vUnit').value;

        ticker.vTotal = document.getElementById('valorTotal');
        ticker.vTotal.innerHTML = parseInt(ticker.quantidade)*parseFloat(ticker.vUnit)||'';

        //pegando o texto do select marcado.
        ticker.corretora = document.getElementById('corretora');

        ticker.outraCorretora = document.getElementById('outraCorretora').value;

        ticker.id = this.idTicker;

        ticker.corretora.addEventListener('click', () => {
            ticker.valueSelect = ticker.corretora.options[ticker.corretora.selectedIndex].value;
            console.log(ticker.valueSelect);
            if(ticker.valueSelect == 'adicionar') {
                document.getElementById('outraCorretora').style.display = 'block'
                document.getElementById('ok').style.display = 'block'
                document.getElementById('outraCorretora').focus()
                
                // adicionarCorretora()
            }
        });  

        return ticker

        //adicionando a outra corretora na lista.
    }

    verificarCorretora() {
        this.outraCorretora = document.getElementById('outraCorretora').value;
        console.log(this.outraCorretora);
        if(this.outraCorretora != '') {
            this.adicionarCorretora()
        }
    }


    adicionarCorretora() {
        let opt = document.createElement('option');
        opt.innerHTML = document.getElementById('outraCorretora').value;
        if (confirm(`Você quer adicionar a corretora '${(opt.value).toUpperCase()}' a lista?`) == true ){
            document.getElementById('corretora').appendChild(opt);
            document.getElementById('outraCorretora').style.display = 'none';
            document.getElementById('ok').style.display = 'none';
            document.getElementById('corretora').value = opt.value;
        }
    };

    salvar(){
        let dados = this.lerDados();
        if(this.lerCampos(dados) == true) {
            this.infoData(dados);



            //ao terminar de adicionar os dados ao array, vai limpar os campos.
            document.getElementById('cnpj').value = '';
            document.getElementById('ticker').value = '';
            document.getElementById('dataNeg').value = '';
            document.getElementById('empresa').value = '';
            document.getElementById('qtda').value = '';
            document.getElementById('vUnit').value = '';
            document.getElementById('valorTotal').innerHTML = ''

            //adiciona os tickers a tabela
            this.adicionarLinha(dados);
        }

    }

    lerCampos(dados) {
        if(dados.codigo == '' || dados.empresa == '' || dados.cnpj == '' || dados.data == '' || dados.vUnit == '' || dados.quantidade == ''){
            alert('[ERRO] Há campos que ainda não foram preenchidos!')
            return false
        }else{
            return true
        }
    }

    //vai ser guardada todas as informações passsadas nos inputs
    infoData(dados) {
        this.arrayTickers.push(dados);
        this.idTicker++;
        console.log(this.arrayTickers);
        dados.vUnit = parseFloat(dados.vUnit);
    }

    //adicionando as linhas na tabela
    adicionarLinha() {
        let tbody = document.getElementById('corpoTable');
        tbody.innerHTML = '';

        for(let i = 0; i < this.arrayTickers.length; i++) {
            let linha = tbody.insertRow();//inserir linha conforme quantidade de tickers.
            
            //inserindo as colunas nas linhas
            let linhaId = linha.insertCell();
            let linhaTicker = linha.insertCell();
            let linhaEmpresa = linha.insertCell();
            let linhaCnpj = linha.insertCell();
            let linhaTipo = linha.insertCell();
            let linhaData = linha.insertCell();
            let linhaQtda = linha.insertCell();
            let linhaVunit = linha.insertCell();
            let linhaVtotal = linha.insertCell();
            let linhaCorretora = linha.insertCell();

            linhaId.innerText = this.arrayTickers[i].id;
            linhaTicker.innerText = this.arrayTickers[i].codigo;
            linhaEmpresa.innerText = this.arrayTickers[i].empresa;
            linhaCnpj.innerText = this.arrayTickers[i].cnpj;
            linhaTipo.innerText = this.arrayTickers[i].cv;
            linhaData.innerText = this.arrayTickers[i].data;
            linhaQtda.innerText = this.arrayTickers[i].quantidade;
            linhaVunit.innerText = this.arrayTickers[i].vUnit;
            linhaVtotal.innerText = this.arrayTickers[i].vTotal;
            linhaCorretora.innerText = this.arrayTickers[i].corretora;

            console.log(this.arrayTickers);
        }
    }


    //verificar se teve alteração em algum input
    limpar() {
        console.log(this.lerDados());
        let data = this.lerDados();
        if((data.cnpj || data.codigo || data.data|| data.empresa || data.quantidade || data.vUnit != '')||(data.cv == 'venda')){
            if(confirm('Tem alterações que não foram salvas,\ndeseja sair sem salvar?')){
                document.getElementById('cnpj').value = '';
                document.getElementById('ticker').value = '';
                document.getElementById('dataNeg').value = '';
                document.getElementById('empresa').value = '';
                document.getElementById('qtda').value = '';
                document.getElementById('vUnit').value = '';
                document.getElementById('valorTotal').innerHTML = ''
            }
        }
        
    }
    fechar(){
        
        menu.style.display = 'block'
        let divCadastro = document.querySelector('.cadastrar');
        divCadastro.style.display = 'none';
        
        //se tiver alguma alteração vai perguntar se quer fechar.
        
        this.limpar()

        //usar dados de outras variaveis
        // console.log(this.lerDados().empresa);
    }
    
    
}


var cod = new Ticker(); 
