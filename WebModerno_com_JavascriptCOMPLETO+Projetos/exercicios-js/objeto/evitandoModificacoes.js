// Object.preventExtensions = previne que se adicione mais atributos, que aumente sua quantidade
const produto = Object.preventExtensions({
  nome: 'Tênis', preco: 289.99, tag: 'Promoção!'
})
console.log('Extensível:', Object.isExtensible(produto)) // Testa se um objeto é extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha de ponta de lápis branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Disney', idade: 180 }
Object.seal(pessoa) // Não é possível adicionar nem excluir atributos, mas é possível alterar os valores
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 200
console.log(pessoa)

// Object.freeze = selado + valores constantes; MUDA NADA e PRONTO CABÔ