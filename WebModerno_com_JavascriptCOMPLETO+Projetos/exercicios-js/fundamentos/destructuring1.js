// Novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua da Pessoa Feliz',
    numero: 1523
  }
}

const { nome, idade } = pessoa // Tire de dentro do objeto 'pessoa' os valores de 'nome' e 'idade'. Tira em uma única linha os dados de um objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Tire de dentro do objeto 'pessoa' os valores de 'nome' e 'idade' e coloque nas variáveis 'n' e 'i'
console.log(n, i)

const { sobrenome, gatinha = true } = pessoa // Tire de dentro do objeto 'pessoa' os valores de 'sobrenome' e 'gatinha' e coloque como valor default para 'gatinha' true.
console.log(sobrenome, gatinha)

const { endereco: {logradouro, numero, cep} } = pessoa // Tire de dentro do objeto 'pessoa' os valores de 'logradouro', 'numero' e 'cep'
console.log(logradouro, numero, cep)

const { conta: {ag, num} } = pessoa // Vai dar erro, porque o dado que se quer desestruturar no caminho pasasdo não existe, pois não existe conta e, assim, não existirá agência e número