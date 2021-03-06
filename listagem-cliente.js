const removeCLiente = id => {
    if(confirm('Deseja deletar o cliente?')) {
        deletaCLiente(id)
        document.location.reload()
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger"
        onclick="removeCLiente(${id})">Excluir</button>
        <a href="edita-clientes.html?id=${id}">
        <button class="btn btn-info" type="button">Editar</button>
        </a>
    `
    linha.innerHTML = conteudoLinha
    return linha
}

listarClientes().then(
    exibe => {
        exibe.forEach( index => {
            corpoTabela.appendChild(exibeCliente(index.cpf, index.nome, index.id))
        })
    }
)