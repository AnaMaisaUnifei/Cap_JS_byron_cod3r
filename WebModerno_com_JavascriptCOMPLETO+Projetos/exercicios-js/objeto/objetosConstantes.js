// pessoa -> 123 -> {...}
const pessoa = {nome: 'Tinowns'}
console.log(pessoa)
pessoa.nome = 'Yampi'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Lulu'} //em consts, você não pode atribuir um novo endereço de memória

Object.freeze(pessoa) // Congelar o objeto, não é mais possível mexer

pessoa.nome = 'José' // NADA
pessoa.end = 'Rua da Cacimba Cheia' // VAI
delete pessoa.nome // FUNCIONAR

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Ranger'})
pessoaConstante.nome = 'fNb' // Não muda
console.log(pessoaConstante)