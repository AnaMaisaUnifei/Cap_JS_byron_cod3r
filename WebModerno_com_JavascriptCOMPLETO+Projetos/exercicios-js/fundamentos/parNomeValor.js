// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
  const saudacao = 'Falaaa' // Contecto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Ana',
  idade: 32,
  peso: 55,
  endereco:{
    logradouro: 'Rua da Cacimbinha',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)