class MaterialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    realizarEmprestimo() {
        if (this.isDisponivel()) {
            this.setDisponibilidade(false);
            return true; // Empréstimo realizado com sucesso
        } else {
            return false; // Material já emprestado
        }
    }

    realizarDevolucao() {
        this.setDisponibilidade(true);
    }

    isDisponivel() {
        return this.disponivel;
    }

    setDisponibilidade(status) {
        this.disponivel = status;
    }
}


// Subclasse Livro
class Livro extends MaterialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }
}

// Subclasse Revista
class Revista extends MaterialBibliografico {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}

// Função para realizar ação (emprestimo ou devolucao)
function realizarAcao(acao) {
    const selectLivros = document.getElementById("livros");
    const selectedIndex = selectLivros.selectedIndex;

    if (selectedIndex === 0) {
        alert("Por favor, selecione um livro válido.");
        return;
    }

    const livroSelecionado = livros[selectedIndex - 1]; // Subtrai 1 para compensar a opção padrão

    if (acao === 'emprestimo') {
        if (livroSelecionado.isDisponivel()) {
            const emprestimoSucesso = livroSelecionado.realizarEmprestimo();
            exibirResultado(`Empréstimo de ${livroSelecionado.titulo}: ${emprestimoSucesso ? 'Sucesso' : 'Material já emprestado'}`);
        } else {
            exibirResultado(`Empréstimo de ${livroSelecionado.titulo}: Material já emprestado`);
        }
    } else if (acao === 'devolucao') {
        if (!livroSelecionado.isDisponivel()) {
            livroSelecionado.realizarDevolucao();
            exibirResultado(`Devolução de ${livroSelecionado.titulo}: Sucesso`);
        } else {
            exibirResultado(`Empréstimo de ${livroSelecionado.titulo}: Material já devolvido`);
        }
    }
}



function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += `<p>${mensagem}</p>`;
}

const livros = [
    new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"),
    new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia"),
    new Livro("Crepúsculo", "Stephenie Meyer", "Romance"),
];

// Preencher dinamicamente as opções do select
const selectLivros = document.getElementById("livros");

livros.forEach((livro, index) => {
    const option = document.createElement("option");
    option.value = index + 1; // Adiciona 1 para evitar o valor 0, que representa a opção padrão
    option.text = livro.titulo;
    selectLivros.add(option);
});
