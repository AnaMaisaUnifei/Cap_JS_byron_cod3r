const pai = { nome: 'Yampi', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // o Objeto tem como protótipo o pai
filha1.nome = 'Isadora'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: { value: 'Gabrielle', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Gio'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key) ? // A propriedade é do próprio objeto?
    console.log(key) : console.log(`Por herança: ${key}`)
}