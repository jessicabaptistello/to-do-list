console.log("Olá mundo, eu sou a Jessica e esta é a minha To-do-list");

/* lista de tarefas 

[x] Saber quando o botao foi clicado;
[x] Pegar texto do input;
[x] Colocar o texto na pela;
[] Deletar a tarefa quando clicar no meu emoticon;
[] Salvar lista;
[] tirar o que ta escrito no input;

Obrigatório:

Adicionar tarefas;
Riscar tarefas;
Excluir tarefas;

*/ 

function adicionarTarefa(){
   // console.log("Cliquei no botão")
    let input = document.querySelector("input").value
    console.log(input)


    let li = document.createElement("li")
    li.innerHTML = input + '<span onclick="deletarTarefa(this)">🗑️</span>'

   //console.log(li);

   document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""

};

function deletarTarefa(li) {
    li.parentElement.remove()

};






