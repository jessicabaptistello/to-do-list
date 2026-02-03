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

const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaLista = []

function adicionarNovaTarefa() {

    if (input.value === "") return

    minhaLista.push({
        texto: input.value,
        concluida: false
    })

    input.value = ""  // limpa o input
    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLista = ''

    minhaLista.forEach((tarefa, posicao) => {

        novaLista += `
        <li class="task ${tarefa.concluida ? 'done' : ''}">
            <img src="./check.jpg" onclick="concluirTarefa(${posicao})">
            <p>${tarefa.texto}</p>
            <span onclick="deletarTarefa(${posicao})">🗑️</span>
        </li>
        `
    })

    listaCompleta.innerHTML = novaLista
}

function concluirTarefa(posicao) {
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida
    mostrarTarefas()
}

function deletarTarefa(posicao) {
    minhaLista.splice(posicao, 1)
    mostrarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa)
