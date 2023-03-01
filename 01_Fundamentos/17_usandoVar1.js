{
    {
        {
            { 
                var sera = 'Será???' // var em um escopo Global
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123 // var em um escopo de Funçao
    console.log(local) // Será visivel somente neste escopo.
}

teste()
console.log(local)

// Evitar criar variáveis que vão para o escopo Global !
