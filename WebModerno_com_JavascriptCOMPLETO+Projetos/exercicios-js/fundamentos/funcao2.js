// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) { // Função anônima
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => { // => substitui a palavra "function"
  return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b //Função de uma única linha. Retornará o resultado dessa linha única
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // Única linha com 1 parâmetro
imprimir2('Legal!!!')