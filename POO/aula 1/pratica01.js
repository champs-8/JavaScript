class Produto{

    constructor(){
        this.id=1;
        this.arrayProdutos=[];
        this.editId=null;
    }

    salvar(){
        let produto=this.lerDados();
        if(this.validaCampos(produto)){
            if(this.editId==null){
                this.adicionar(produto);
            }
            else{
                this.atualizar(this.editId, produto);
            }
        }   
        console.log(produto);
        this.listaTabela();
        this.cancelar();
    }
    cancelar(){
        document.getElementById('produto').value=''
        document.getElementById('valor').value=''
    }
    listaTabela(){
        let tbody=document.getElementById('tbody');
        tbody.innerHTML=''

        for(let i=0;i<this.arrayProdutos.length;i++){
            let tr=tbody.insertRow();
            //inserindo colunas
            let td_id=tr.insertCell();
            let td_produto=tr.insertCell();
            let td_valor=tr.insertCell();
            let td_acao=tr.insertCell();

            //inserindo valores correspondentes
            td_id.innerText=this.arrayProdutos[i].id;
            td_produto.innerText=this.arrayProdutos[i].nome;
            td_valor.innerText=this.arrayProdutos[i].valor;

            //centralizar
            td_id.classList.add('center');
            td_acao.classList.add('center');

            //colocar imganes
            let imgEdit=document.createElement('img');
            imgEdit.src='edit.png';
            let imgDel=document.createElement('img');
            imgDel.src='delete.png';
            imgEdit.setAttribute('onclick',"produto.editar("+JSON.stringify(this.arrayProdutos[i])+")");
            imgDel.setAttribute('onclick',"produto.deletar("+this.arrayProdutos[i].id+")");

            td_acao.appendChild(imgEdit);//<td><img></td>
            td_acao.appendChild(imgDel);
        }
    }
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
        console.log(this.arrayProdutos);
        produto.valor = parseFloat(produto.valor);
    }
    atualizar(id, produto){
        for(let cont = 0; cont<this.arrayProdutos.length; cont++){
            if(this.arrayProdutos[cont].id == id) {
                this.arrayProdutos[cont].nome = produto.nome;
                this.arrayProdutos[cont].valor = produto.valor;
            }
        }

        document.getElementById('btn1').innerHTML='Salvar'
    }
    lerDados(){
        let produto={}
        produto.nome= document.getElementById('produto').value;
        produto.valor=document.getElementById('valor').value;
        produto.id=this.id
        return produto;
    }
    validaCampos(produto){
        let msg='';
        if(produto.nome==''){
            msg+='- Informe o nome do produto\n'
        }
        if(produto.valor==''){
            msg+='- Informe o valor do produto\n'
        }
        console.log(msg);
        if(msg!=''){
            alert(msg);
            return false
        }
        return true;
    }
    deletar(id){
        if(confirm('Dejesa realmente deletar o produto do ID '+id)){
            alert('Produto deletado')
            let tbody=document.getElementById('tbody');

            for(let cont=0;cont<this.arrayProdutos.length;cont++){
                if(this.arrayProdutos[cont].id==id){
                    this.arrayProdutos.splice(cont,1);
                    tbody.deleteRow(cont);
                }
            }
        }
    }
    editar(dados){
        this.editId=dados.id
        document.getElementById('produto').value=dados.nome
        document.getElementById('valor').value=dados.valor
        document.getElementById('btn1').innerHTML='Atualizar'
    }
}

var produto=new Produto();