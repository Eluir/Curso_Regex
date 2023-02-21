const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) // \d é apenas os dígitos (números) [0-9]
console.log(texto.match(/\D/g)) // \D tudo que não é número [^0-9]

console.log(texto.match(/\w/g)) // \w equivale ao [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // \W traz tudo que não é caracter [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // \s espaço [ \t\n\r\f]
console.log(texto.match(/\S/g)) // \S não espaço [^ \t\n\r\f]

