// Função = bloco de código nomeado;
// Coloque bons nomes, por favor

// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Se passar de menos, ela retorna NaN
imprimirSoma(1, 2, 3, 4, 5) // Se passar demais, ele pega só os que ele precisa (os dois primeiros)
imprimirSoma() // Se não passar nada, ela retonra NaN

// Função com retorno
function soma(a, b = 0){ // 0 é o default do b. Se não passar o b, ele soma com 0, ou seja, retorna o a.
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // Como a não está tratado, o resultado será NaN