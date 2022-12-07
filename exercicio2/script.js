
const entrada = +(prompt('Digite um número: '))

let texto = `Tabuada do ${entrada}: \n`

let numeros = []

for (let i = 0; i <=10; i++){
    numeros.push(i)
}

for (let numero in numeros){
    texto += `${entrada} x ${numero} = ${entrada * numero}\n`
}

console.log(texto)