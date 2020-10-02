const formCadastroCLiente = document.querySelector('[data-form]')

formCadastroCLiente.addEventListener('submit', event => {
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]')
    .value
    const cpf = event.target.querySelector('[data-cpf]')
    .value

    if(validaCPF(cpf)) {
        cadastrarClientes(nome, cpf)
    } else {
        alert('Insira um CPF Valido')
    }
    
})