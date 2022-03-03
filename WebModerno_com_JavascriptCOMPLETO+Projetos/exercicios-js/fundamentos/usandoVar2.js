var numero = 1

{ // Não existe escopo dentro de bloco, apenas de função
  var numero = 2
  console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)