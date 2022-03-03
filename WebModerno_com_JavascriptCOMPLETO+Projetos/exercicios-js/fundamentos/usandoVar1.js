// Resumindo: não use variável global :)
{
  {
    {
      {
        var sera = "Será???";
        console.log(sera)
      }
    }
  }
}

console.log(sera)

function teste(){
  var local = 123
  console.log(local)
}

teste()
console.log(local) // Essa variável só pode ser acessada dentro da função