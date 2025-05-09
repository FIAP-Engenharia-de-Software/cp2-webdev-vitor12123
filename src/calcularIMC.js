// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let peso = 70
  let altura = 1.80
  let calculoIMC = peso / (altura ** 2)

  if (calculoIMC < 18.4) {
    return alert("Abaixo do peso")
  }
  else if (calculoIMC < 24.9 && calculoIMC > 18.5) {
    return alert("Peso normal")
  }
  else if (calculoIMC < 29.9 && calculoIMC > 24.9) {
    return alert("Sobrepeso")
  }
  else if (calculoIMC >= 30) {
    return alert("Obesidade")
  }
  else {
    return alert('Erro')
  }
}

calcularIMC()

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };