const funcs = []

for (var i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i)
  })
}

funcs[2]() // Vai retornar 10 nos dois, pois var não tem escopo de bloco
funcs[8]()