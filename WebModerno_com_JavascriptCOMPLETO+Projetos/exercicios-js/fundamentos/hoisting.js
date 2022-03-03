// var a // é como se ela subisse isso aqui <--
console.log('a =', a)
var a = 2 // Sobe o lançamento da variável para que não ocorra um erro. Ele só estaria undefined. Não tem motivo para fazer isso, é apenas uma curiosidade
console.log('a =', a)


console.log('b =', b)
let b = 2 // Com let, a subida do hoisting não funciona.
console.log('b =', b)

// Para mais, canal do homi :)
