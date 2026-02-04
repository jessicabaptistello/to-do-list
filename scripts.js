/*console.log("Olá mundo, eu sou a Jessica e esta é a minha To-do-list");

 lista de tarefas 

[x] Saber quando o botao foi clicado;
[x] Pegar texto do input;
[x] Colocar o texto na pela;
[X] Deletar a tarefa quando clicar no meu emoticon;
[X] Salvar lista;
[X] tirar o que ta escrito no input;
[X] Duas caixas

Obrigatório:

Adicionar tarefas;
Riscar tarefas;
Excluir tarefas;

*/ 

const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

const listaPendentes = document.querySelector('#lista-pendentes')
const listaConcluidas = document.querySelector('#lista-concluidas')

let minhaLista = []

function adicionarNovaTarefa() {

    if (input.value === "") return

    minhaLista.push({
        texto: input.value,
        concluida: false
    })

    input.value = ""
    mostrarTarefas()
}

function mostrarTarefas() {

    let listaPendentesHTML = ''
    let listaConcluidasHTML = ''

    minhaLista.forEach((tarefa, posicao) => {

        let itemHTML = `
        <li class="task ${tarefa.concluida ? 'done' : ''}">
            <img src="./check.jpg" onclick="concluirTarefa(${posicao})">
            <p>${tarefa.texto}</p>
            <span onclick="deletarTarefa(${posicao})">🗑️</span>
        </li>
        `

        if (tarefa.concluida) {
            listaConcluidasHTML += itemHTML
        } else {
            listaPendentesHTML += itemHTML
        }

    })

    listaPendentes.innerHTML = listaPendentesHTML
    listaConcluidas.innerHTML = listaConcluidasHTML
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
