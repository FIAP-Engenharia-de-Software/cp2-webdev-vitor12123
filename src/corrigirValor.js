// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  valor = '3'
  if (valor === true) {
    correcao = Number(valor)
    return correcao
  }
  else {
    return alert("Valor inválido")
  }
}

corrigirValor()

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };