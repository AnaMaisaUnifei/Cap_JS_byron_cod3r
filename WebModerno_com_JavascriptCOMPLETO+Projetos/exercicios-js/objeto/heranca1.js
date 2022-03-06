const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.__proto__) // Acessar o protótipo do objeto, o objeto pai
console.log(ferrari.__proto__ === Object.prototype) // True
console.log(volvo.__proto__ == Object.prototype) // True
console.log(Object.prototype.__proto__ === null) // True

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)