const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c} // A notação de cima permite que você mude o nome do atributo, para que ele não fique com o nome da variável
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
  funcao1: function() {
    // ...
  },
  funcao2() { // Forma mais curta de definir função na versão mais nome do JS
    //...
  }
}
console.log(obj5)