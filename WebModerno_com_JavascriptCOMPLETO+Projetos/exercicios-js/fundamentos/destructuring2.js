const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Vai serguir a ordem que foi colocada do lado atribuído, 'colocando' também nos que estão vazios
console.log(n1, n3, n5, n6)

const [ ,[ , nota]] = [[ , 8, 8], [9, 6, 8]] // Não use isso :(, use o fácil :)
console.log(nota)