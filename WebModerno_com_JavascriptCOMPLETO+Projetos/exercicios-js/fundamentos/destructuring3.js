function rand({min = 0, max = 1000}){ // Recebe um objeto e já extrai dele os valores que serão usados na função
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand()) // Vai dar erro, porque ele vai desestruturar um objeto que não existe