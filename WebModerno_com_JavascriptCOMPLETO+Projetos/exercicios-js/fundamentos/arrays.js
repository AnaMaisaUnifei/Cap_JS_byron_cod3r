const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 //Se colocar um número no indice que não seja o príxmo exato, ele coloca o valor na posição escolhida e informa o número de "casas" vazias
console.log(valores)
console.log(valores.length) //Retorna o número de elementos

valores.push({id: 3}, false, null, 'teste') //Arrays são heterogêneos, mas usar assim não é uma boa prática; Preze por usar homogeneamente, cada array necessário de um tipo.
console.log(valores)

console.log(valores.pop()) // Retorna o último elemento do array e o deleta
delete valores[0] // Deleta o elemento especificado no indice
console.log(valores)

console.log(typeof valores) //É do tipo "object"