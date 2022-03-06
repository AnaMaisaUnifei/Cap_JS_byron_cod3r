const sequencia = {
  _valor: 1, // Convencionalmente, o '_' no início do nome do atributo mostra que ele é privado, mesmo que, par ao JS, isso não vá alterar em nada a forma de acessar, ou seja, ele não será 'barrado' , por exemplo. É uma boa prática entre desenvolvedores.
  get valor() { return this._valor++ }, // Função para pegar/receber valor = faz com que seja possível fazer algum tratamento no retorno ou inserção de um dado no objeto
  set valor(valor) { // Apenas no get e set é possível ter nomes iguais para diferentes métodos
    if (valor > this._valor){
      this._valor = valor
    }
   } 
}

console.log(sequencia.valor, sequencia.valor) // O JS entende que você está querendo ler um valor e sabe qual método chamar (get)
sequencia.valor = 1000 // Percebe que é uma inserção e chama o método set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // Vai imprimir 1002 e 1003, pois ele ignora a inserção do '900' por não ter passado na condição da função 'set'
