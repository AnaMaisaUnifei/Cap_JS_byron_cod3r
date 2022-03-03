let numero = 1

{ // Let respeita o escopo de bloco
  let numero = 2
  console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)