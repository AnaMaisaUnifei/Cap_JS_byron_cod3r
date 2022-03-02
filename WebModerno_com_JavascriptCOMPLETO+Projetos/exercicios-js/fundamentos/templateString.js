const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
  Olá
  ${nome}!`
console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`) //Interpreta como variavel ou expressão apenas o que está dentro de ${}

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)