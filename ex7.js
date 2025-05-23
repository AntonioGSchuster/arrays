// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
// Método sugerido: length


let frutas = ['laranja', 'Maça', 'banana', 'cereja', 'uva'];
console.log(frutas);

frutas.splice(1,2, 'manga', 'morango');
console.log(frutas)
console.log("o tamanho do array frutas é:" + frutas.length)