let a = 0;
let bordas = document.getElementById('bordas')
let pokemon = document.getElementById('pokemon')

function aumentar() {
  let b = a++;

  function verificadora() {
    if (a == 1) {
      imagem.src = "imagens/pikachu.png";
      bordas.style.border = "1px solid yellow";
      pokemon.innerText='Pikachu'
    } else if (a == 2) {
      imagem.src = "imagens/bulbasaur.png";
      bordas.style.border = "1px solid green";
      pokemon.innerText='Bulbasaur'
    } else if (a == 3) {
      imagem.src = "imagens/charmander.png";
      bordas.style.border = "1px solid red";
      pokemon.innerText='Charmander'
    } else if (a == 4) {
      imagem.src = "imagens/squirtle.png";
      bordas.style.border = "1px solid blue";
      pokemon.innerText='Squirtle'
    }
  }

  function diminuir() {
    if (a == 4) {
      a = 0;
    }
  }

  verificadora();
  diminuir();
}

aumentar();
setInterval(aumentar, 1000);
