console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Balinha'
// obj1['nome'] = 'Balinha2' // igual o de cima, vai sobrescrever se executar os dois
console.log(obj1.nome)

function Obj(nome){
  this.nome = nome // This = Torna o dado público, visível pra fora
  this.exec = function () {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()