const escola = 'Cod3r'

console.log(escola.charAt(4)) //charAt = retorna o caractere de índice X da string; Começa do 0
console.log(escola.charAt(10)) // Não joga erro na sua cara :). Te amo JS <3
console.log(escola.charCodeAt(3)) //charCodeAt = retona o valor do caractere de índice X na tabela ASCII
console.log(escola.indexOf('d')) //indexOf = retorna o índice de X na string

console.log(escola.substring(1)) //substring = pega a partir do indice X até o fim
console.log(escola.substring(0, 3)) //substring = pega a partir do indice X(0) até o indice Y(3), sem colocar o Y

console.log('Escola '.concat(escola).concat("!")) //.concat = concatena coisas
console.log('Escola ' + escola + "!") //.concat = concatena coisas
console.log(escola.replace(3, 'e')) //replace = substitui o que tem no indice X(3) em o que for colocado em Y('e')

console.log('Ana,Maria,Pedro'.split(',')) //split = gera um array com o separador que for colocado