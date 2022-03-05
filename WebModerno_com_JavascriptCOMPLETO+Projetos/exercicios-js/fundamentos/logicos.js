/**
 * Condições E
 * v e v -> v
 * v e f -> f
 * f e ? -> f
 * 
 * Condições OU
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 * 
 * Condições OU exclusivo = condições diferentes
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 * 
 * Negação lógica - unários
 * !v -> f
 * !f -> v
*/ 

function compras (trab1, trab2) {
  const comprarSorvete = trab1 || trab2
  const comprarTV50 = trab1 && trab2
  // const comprarTV32 = !!(trab1 ^ trab2) // butwise xor; o homi não quis usar essa
  const comprarTV32 = trab1 != trab2 // XOR pode ser simulado com diferente, pois o XOR tem esse comportamento
  const manterSaudavel = !comprarSorvete

  return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} // Passar somente os valores já cria os pares chave valor; Nome da variável: valor contido
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))