console.log('01)', '1' == 1) // Igual em valor
console.log('02)', '1' === 1) //Extritamente igual, em valor e em tipo
console.log('03)', '3' != 3) // Diferente em valor
console.log('04)', '3' !== 3) // Extritamente diferente, em valor e em tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //Data de referência: 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // Compara os endereços de memória. Logo, são diferentes
console.log('10)', d1 == d2) // Aqui também!
console.log('11)', d1.getTime() === d2.getTime()) // Milisegundos desde a data de referência

console.log('12)', undefined == null) // Comparação de valores
console.log('13)', undefined === null) // Comparação de valores e tipos