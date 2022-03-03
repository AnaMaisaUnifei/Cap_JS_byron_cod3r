const funcs = []

for (let i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i)
  })
}

funcs[2]() // Vão ter valores diferentes, pois let tem escopo de bloco
funcs[6]()
funcs[8]()