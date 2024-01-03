function adicionarTarefa() {
    const inputTarefa = document.getElementById("novaTarefa");
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== "") {
        const listaTarefas = document.getElementById("listaTarefas");

        const novaTarefa = `
            <li>
                <span>${textoTarefa}</span>
                <button onclick="marcarConcluida(this)">Concluída</button>
                <button onclick="removerTarefa(this)">Remover</button>
            </li>
        `;

        listaTarefas.innerHTML += novaTarefa;
        inputTarefa.value = "";
    }
}

function marcarConcluida(botaoConcluir) {
    const tarefa = botaoConcluir.parentNode;

    // Adiciona a classe "completed" para mudar o estilo do texto
    tarefa.classList.toggle("completed");

    if (tarefa.classList.contains("completed")) {
        // Move a tarefa para o final da lista
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.appendChild(tarefa);

        // Remove os botões da tarefa concluída
        const botoes = tarefa.querySelectorAll("button");
        botoes.forEach(botao => botao.remove());
    }
}


function removerTarefa(botaoRemover) {
    botaoRemover.parentNode.remove();
}
