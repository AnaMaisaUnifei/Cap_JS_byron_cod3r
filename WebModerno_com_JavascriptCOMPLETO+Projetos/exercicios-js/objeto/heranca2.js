// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // Não faça isso :)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' } // Ele vai pegar o attr3 mais perto do escopo
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  veloAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status () {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}` // super = invoca o método do protótipo
  }
}

Object.setPrototypeOf(ferrari, carro) // Estabaleceu-se uma relação entre ferrari e carro: ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // Retorna apenas os atributos e funções pertencentes ao objeto, mas você pode chamá-las
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())