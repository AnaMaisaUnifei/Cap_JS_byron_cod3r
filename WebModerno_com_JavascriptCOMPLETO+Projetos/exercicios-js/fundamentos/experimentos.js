// var entra no obj window do browser. Mas, let e const não. O correto é criar um obj para armazenar suas variáveis e funções para usar na web, pra expecificar mais o esccopo e tirar da disputa global.
let a = 3

global.b = 123

this.c = 465
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // module.exports é a 'window' do browser
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca: sem var e sem let, sem nada!
abc = 3 // Não fazer isso nem se for gambiarra!
console.log(global.abc)

// modlue.exports = { e: 456, f: false, g: 'teste' }