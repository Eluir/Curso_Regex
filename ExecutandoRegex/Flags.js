// g - global - procura de forma global. Nao parada a busco na primeira localização
// i - ignore case - Ignora minúscula e maíusculas

const texto = 'Carlos assionou o abaixo-assinado.'

console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/i))
console.log(texto.match(/ab|c/gi))
