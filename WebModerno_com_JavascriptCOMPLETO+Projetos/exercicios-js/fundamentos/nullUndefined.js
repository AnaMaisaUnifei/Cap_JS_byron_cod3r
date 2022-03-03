let valor //Não inicializada
console.log(valor)


valor = null // Ausência de valor; Não é interessante zerar com undefined;
console.log(valor)
// console.log(valor.toString()) // Erro! Não é possível acessar algo nulo

const produto = {}
console.log(produto.preco) // O objeto está setado, mas o preço está indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar!
console.log(!!produto.preco)
// delete produto.preco // se quiser tirar, use isso
console.log(produto)

produto.preco = null // Preço não definido
console.log(!!produto.preco)
console.log(produto)