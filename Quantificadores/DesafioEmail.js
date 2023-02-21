const texto = `
Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- eluir_jr@gmail.com
- Januario.@hotmail.com
- sebastian_12_@yahoo.com.br
- celeste1212@globo.com`

console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
