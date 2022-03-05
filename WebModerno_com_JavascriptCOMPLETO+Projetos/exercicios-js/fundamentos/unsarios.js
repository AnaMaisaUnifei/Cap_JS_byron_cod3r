let num1 = 1
let num2 = 2

num1++ //Forma pós-fixa; soma 1 a variável
console.log(num1)
--num1 //Subtrai 1; ele é agoniado esse aqui
console.log(num1)

console.log(++num1 === num2--) // A comparação é feita antes da atualização da segunda variável. Pelo amor de Jesus, não faça isso. Código difícil, cabeça ruim
console.log(num1 === num2)

// O operador de exponenciação
let exp = 2 ** 3 // Primeiro(2) é a base, segundo(3) é o expoente
console.log(exp)

let base = 2
base **= 3 // Eleva o armazenado ao expoente 3 e armazena; base = base ** 3
console.log(base)