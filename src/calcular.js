// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  num1 = Number(prompt('digite o primeiro numero: '))
  num2 = Number(prompt('digite o segundo numero: '))
  if (num1 !== Number || num2 !== Number) {
    alert("Erro: parâmetros inválidos")
  }
  if (num1 / num2 == 0 || num2 / num1 == 0) {
    alert("Erro: divisão por zero")
  }


  let operado = prompt('escolha oque calcular entre as opções: +, -, *, / ; ')
  if ("+" in operado) {
    let soma = num1 + num2
    return soma
  }
  else if ("-" in operado) {
    let subtracao = num1 - num2
    return subtracao
  }
  else if ("*" in operado) {
    let multiplicacao = num1 * num2
    return multiplicacao
  }
  else if ("/" in operado) {
    let divisao = num1 / num2
    return divisao
  }
  else {
    return alert("Erro: operação inválida")
  }
}

calcular()


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };