const paises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

let texto = 'Ranking:\n'

for (let pais of paises){
    texto += `${paises.indexOf(pais) + 1} - ${pais}\n`
}

console.log(texto)