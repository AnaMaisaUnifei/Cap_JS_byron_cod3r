const pessoa = {
  nome: 'Tinowns',
  idade: 6,
  peso: 32
}

console.log(Object.keys(pessoa)) // Pega as chaves do objeto
console.log(Object.values(pessoa)) // Pega os valores do objeto
console.log(Object.entries(pessoa)) // Objeto como array

Object.entries(pessoa).forEach( ([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // define uma propriedade de forma a adicionar características específicas dela
  enumerable: true, // Será listada como chave?
  writable: false, // Poderá ser alterada?
  value: '01/01/2001' // Seu valor
})

console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '01.09.2015' // Não altera, pois foi definido que não poderia
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Cria uma cópia do primeiro objeto e concatena os objetos passados dentro da cópia (obj)
console.log(dest) // Ele colocou aqui tbm... e agr Giovani?
console.log(obj)

Object.freeze(obj)
Object.c = 4234
console.log(obj)