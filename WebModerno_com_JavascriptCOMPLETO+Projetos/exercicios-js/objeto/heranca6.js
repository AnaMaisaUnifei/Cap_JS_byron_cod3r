function Aula(nome, videoID) {
  this.nome = nome
  this.videID = videoID
}

const aula1 = new Aula('Bem-Vinda', 123)
const aula2 = new Aula('Inté', 456)
console.log(aula1, aula2)

// Simulando o New
function novo(f, ...params) { /// '...' concatena tudo que for passado em um array 'params'
  const obj = {}
  obj.__proto__ = f.prototype // Associação ao atributo prototype
  f.apply(obj, params) // Executar a função f
  return obj
}

const aula3 = novo(Aula, 'Que a porta bata', 789)
const aula4 = novo(Aula, 'Onde o sol não bate', 159)
console.log(aula2, aula4)