// NÃO SUBSTITUIA COMPORTAMENTOS JÁ EXISTENTES, PFVR, NÃO SEJA JUJU :)
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
  return this[0]
}

console.log(['Ana', 'Banana', 'Estude!'].first())
console.log([4, 2, 9, 3].first())

String.prototype.toString = function() {
  return 'Lascou foi tudo (gostei do senhor, moço!)'
}

console.log('Escola Cod3r'.reverse())