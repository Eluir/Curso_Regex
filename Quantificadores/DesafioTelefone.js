const texto = `
Lista telefônica:
- (11) 98756-1212
- 98765-4321
- (81)9987-1122
- (21) 99546-1222
- (1) 1234-5566`

const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g

console.log(texto.match(regex))