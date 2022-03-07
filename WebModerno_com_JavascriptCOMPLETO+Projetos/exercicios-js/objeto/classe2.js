class Avo {
  constructor(sobrenome){
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo { // extends = mostra que Pai tem Avo como protótipo
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome) // Pega o sobrenome do protótipo, caso não seja passado nenhum
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('Silva') // Coloca 'Silva' como sobrenome
  }
}

const filho = new Filho
console.log(filho)