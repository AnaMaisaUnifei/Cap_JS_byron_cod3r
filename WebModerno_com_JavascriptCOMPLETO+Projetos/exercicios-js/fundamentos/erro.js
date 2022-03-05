function tratarErroELancar(erro) {
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem' // Objetos tbm
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!"); // Códigos potencialmente perigosos, que podem gerar erros ou podem ter ocasiões em que realmente o erro deve acontecer (enfim, usuários, jogue-os pela janela :) )
  } catch (e) { // Pega o erro e retorna; não jogue o erro na cara do usuário, não é elegante, ou seja, triste :(
    tratarErroELancar(e);
  } finally { // Dando certo ou errado, vai acontecer
    console.log("Final");
  }
}

const obj = { name: "Toin" };
imprimirNomeGritado(obj);
