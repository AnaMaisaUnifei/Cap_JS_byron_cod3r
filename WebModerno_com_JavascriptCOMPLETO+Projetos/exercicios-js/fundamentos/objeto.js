// Resumindo: Goste de JS :), mas odeie química <3
// Objeto = Conjunto de pares (chave --> valor)
const prod1 = {}

// Atribuição de valores - e chaves - de forma dinâmica
prod1.nome = 'Celular Ultra Mega Blaster, que eu queria :)'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //caso for usar nomes com espaço; Mas, não é legal usar :(

console.log(prod1)

// Declaração completa do objeto
const prod2 = {
  nome: 'Tênis do Michael Jordan',
  preco: 2999.90,
  OqAnaTem:{
    horasDoDia: 24,
  OqAnaPrecisa:{ // O nome precisa ser único dentro da hierarquia específica
    horasDoDia: 'O dobro do que Ana tem, no mínimo'
  }
  }
}

// Isso é um JSON :). Ali em riba não é JSON
'{"nome": "Brusinha da Adidas", "preco": 79.90}'

console.log(prod2)