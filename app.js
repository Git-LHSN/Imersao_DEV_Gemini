function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados_pesquisa");
    let valorPesquisado = document.getElementById("campo_pesquisa").value;

    // se valorPesquisado for uma string sem nada
    if (!valorPesquisado) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
        return;
    }

    valorPesquisado = valorPesquisado.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let biografia = "";
    let tags = "";
    let apelido = "";
    let link_atleta = "";
    let premiacoes = "";
    let modalidade = "";
    let categoria = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        apelido = dado.apelido.toLowerCase();
        biografia = dado.biografia.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se nome includes valorPesquisado
        if (nome.includes(valorPesquisado) || biografia.includes(valorPesquisado) || tags.includes(valorPesquisado) || apelido.includes(valorPesquisado)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="biografia-meta">Biografia: ${dado.biografia}</p>
                <p class="biografia-meta">Premiações: ${dado.premiacoes}</p>
                <p class="biografia-meta">Modalidade: ${dado.modalidade}</p>
                <p class="biografia-meta">Categoria(s): ${dado.categoria}</p>
                <a href=${dado.link_atleta} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}