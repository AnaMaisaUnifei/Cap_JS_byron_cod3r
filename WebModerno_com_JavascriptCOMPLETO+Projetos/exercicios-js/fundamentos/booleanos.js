let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //! = negação; !! = mesma coisa, negando duas vezes; Serve para testar o true or false em contextos diferentes

console.log('Os verdadeiros...') // Basicamente, todos os inteiros (fora o 0), strings e palavras reservadas de valor e positivas
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...') //Basicamente, o 0, strings vazias e palavras reservadas negativas
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))

// Valores default
let nome = 'Ana'

console.log(nome || 'Desconhecido') //Estabalece valores padrão para determinados casos; Se não tiver nome, string vazia é "false". Logo, ele imprime o primeiro "true" encontrado