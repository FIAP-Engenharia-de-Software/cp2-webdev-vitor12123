// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

function adivinharNumero(max, palpite) {
  let max = 10
  let num = 0
  num.valueOf(0 < num && num < max)
  num.toFixed
  let palpite = Number(prompt('digite um palpite de qual o numero: '))
  if (palpite == num) {
    console.log("Acertou!")
  }
  else {
    console.log("Errou! Tente novamente!")
  }
}

adivinharNumero()

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };