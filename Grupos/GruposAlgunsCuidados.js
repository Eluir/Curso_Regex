const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) // não é um grupo
console.log(texto.match(/([abc])/gi))