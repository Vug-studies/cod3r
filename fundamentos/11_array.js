/*      c0d3r

    * Array

    - Um array (arranjo ou vetor) é um conjunto de dados
    - Array é uma forma de agrupar múltiplos valores de uma forma linear em uma única variável.
    - Esta estrutura é uma estrutura indexada, você acessar os elementos de um Array a partir de um número.
        (Exemplo: O primeiro elemento você acessa a partir do índice 0 e o segundo a partir do 1)

*/


const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)