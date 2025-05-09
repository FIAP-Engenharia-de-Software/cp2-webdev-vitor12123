// ## 2. Verificador de Comprimento e Presença de Palavras **(1 ponto)**

// **Enunciado:**

// Implemente a função verificarPalavra, que receba uma frase, e uma palavra de busca e:

// - Retorna `"A frase é muito curta"` se o comprimento da frase for menor que 5;
// - Retorna `"A frase contém a palavra de busca"` se a `palavraBusca` estiver contida dentro de frase (ignorando maiúsculas e minúsculas);
// - Retorna `"A frase não contém a palavra de busca"` caso contrário;
// - Remove espaços extras no início e no final da frase antes de realizar a verificação.

function verificarPalavra(frase, palavraBusca) {
  let frase = prompt('digite a frase: ').toLocaleUpperCase
  let palavraBusca = prompt('digite a palavra de busca: ').toLocaleUpperCase

  if (palavraBusca in frase) {
    alert("A frase contém a palavra de busca")
  }
  else if (length(frase) < 5) {
    alert("A frase é muito curta")
  }
  else {
    alert("A frase não contém a palavra de busca")
  }
}

verificarPalavra()

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { verificarPalavra };