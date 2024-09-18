1.
  var nome ="victor";
    console.log(nome)
    var idade ="21";
    console.log(idade)
// Exibe uma mensagem no terminal
console.log("Olá, meu nome é victor tenho 21 anos!");
 
2.
var nome = "recife";
console.log(nome)
let mensagem= ("olá, meu nome é victor sou de recife!");
// exibe uma mensagem no terminal
console.log(mensagem)

3.

// Declaração de variáveis
let a = 10;
let b = 5;

// Operações matemáticas básicas
let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;

// Exibindo os resultados
console.log("Soma: " + soma); 
console.log("Subtração: " + subtracao); 
console.log("Multiplicação: " + multiplicacao); 
console.log("Divisão: " + divisao);

4.
function calcularAreaTriangulo(base, altura) {
    return 0.5 * base * altura;
}

// 
let base = 10;
let altura = 5;
let areaTriangulo = calcularAreaTriangulo(base, altura);
console.log(`A área do triângulo é: ${areaTriangulo}`);


5.
// Função para calcular a média
function calcularMedia(numeros) {
    // Calcula a soma de todos os números
    let soma = numeros.reduce((acc, valor) => acc + valor, 0);
    
    // Calcula a média
    return soma / numeros.length;
}

let numeros = [10, 8, 7];
let media = calcularMedia(numeros);
console.log(`A média dos números é: ${media}`);


6.
function calcularDesconto(precoOriginal, percentualDesconto) {
    // Calcula o valor do desconto
    const desconto = (precoOriginal * percentualDesconto) / 100;
    // Calcula o preço final
    const precoFinal = precoOriginal - desconto;
    return precoFinal;
}

// Exemplo
const precoOriginal = 100; // Valor 
const percentualDesconto = 20; // Porcentagem 

const precoComDesconto = calcularDesconto(precoOriginal, percentualDesconto);
console.log(`O preço final após o desconto é: R$ ${precoComDesconto.toFixed(2)}`);

7.
function calcularImpostoRenda(salarioBruto) {
    let imposto = 0;

    // Tabela de alíquotas (valores fictícios para exemplo)
    const faixas = [
        { limite: 1903.98, aliquota: 0, deducao: 0 },
        { limite: 2826.65, aliquota: 0.075, deducao: 142.80 },
        { limite: 3751.05, aliquota: 0.15, deducao: 354.80 },
        { limite: 4664.68, aliquota: 0.225, deducao: 636.13 },
        { limite: Infinity, aliquota: 0.275, deducao: 869.36 }
    ];

    // Calcular o imposto com base na tabela
    for (let i = 0; i < faixas.length; i++) {
        const faixa = faixas[i];

        if (salarioBruto > faixa.limite) {
            continue;
        } else {
            // Calcula o imposto para a faixa
            const baseCalculo = i === 0 ? 0 : faixas[i - 1].limite;
            const rendaTributavel = salarioBruto - baseCalculo;
            imposto = rendaTributavel * faixa.aliquota - faixa.deducao;
            break;
        }
    }

    // Garantir que o imposto não seja negativo
    return Math.max(0, imposto);
}

// Exemplo de uso:
const salarioBruto = 3000; // Salário bruto informado
const impostoDevido = calcularImpostoRenda(salarioBruto);
console.log(`O imposto de renda devido é: R$ ${impostoDevido.toFixed(2)}`);

8
function converterMoeda(valorInicial, taxaCambio) {
    // Calcula o valor final
    const valorFinal = valorInicial * taxaCambio;
    return valorFinal;
}

// Exemplo de uso:
const valorInicial = 100; // Valor em moeda de origem (ex: BRL)
const taxaCambio = 5.30; // Exemplo de taxa de câmbio (1 BRL = 5.30 USD)

const valorConvertido = converterMoeda(valorInicial, taxaCambio);
console.log(`Valor inicial: R$ ${valorInicial.toFixed(2)}`);
console.log(`Valor convertido: $ ${valorConvertido.toFixed(2)}`);

9
function celsiusParaFahrenheit(celsius) {
    // Converte Celsius para Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Exemplo de uso:
const temperaturaCelsius = 25; // Temperatura em Celsius
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit.toFixed(2)}°F`);



