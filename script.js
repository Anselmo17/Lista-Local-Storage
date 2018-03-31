
//adiciona itens
function adicionar(){



 //inicia um array 
 var profissoes = [];
 var nomes = [];

 //pega as informações do local storage
 var getProfissao = localStorage.getItem("profissao");
 var getNome = localStorage.getItem("nome");


 //verifica se o getmedicos é verdadeiro
 if(getProfissao){
    profissoes = getProfissao.split(',');
 }

 //verifica se o getNome é verdadeiro
 if( getNome){
    nomes = getNome.split(',');
}

 //pegando os valores e jogando no array
 nomes.push(nome.value);
 profissoes.push(profissao.value);

 //setando os dados no localStorage
 localStorage.setItem("profissao" , profissoes);  
 localStorage.setItem("nome",nomes); 
 alert("Item adicionado");


    //limpa os campos de entrada
    document.getElementById("profissao").value = "";
    document.getElementById("nome").value = "";
   }

//ler os dados 
function ler(){
    var obj = localStorage.getItem("medico");
    if(obj != null)
      alert(obj)
    else
    alert("O item não existe.");  
}




//listar na tela 
function lista(){
  var lista = localStorage.getItem("profissao").split(",");
  var nomeLista = localStorage.getItem("nome").split(",");

  var profissoes = "";
  
  //pegando todos os dados da lista através de um loop e criando a tabela
  if(lista.length >= 1){
    for (let i = 0; i < lista.length; i++) {  
         profissoes += "<tr>"+"<td>"+[i+1] +"</td><td>"+ nomeLista[i] +"</td><td>"+ lista[i] +"</td>"+"</tr>";
      }
    }

    //devolvendo no html
    document.getElementById("listagem").innerHTML = profissoes;
    
}
  
//limpa os dados
function limpar(){
  localStorage.clear();
  alert("Dados removidos do localStorage ");
}





