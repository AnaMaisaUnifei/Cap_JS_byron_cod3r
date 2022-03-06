// JSON = principal formato de interoperabilidade. Comunica sistemas de mesma ou diferentes tecnologias
const obj = { a: 1, b: 8, c: 4, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // Transforma Objetos JS em JSON. Só textos!

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // Formato Incorreto
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // Formato Incorreto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Transforma JSON em Objeto
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))