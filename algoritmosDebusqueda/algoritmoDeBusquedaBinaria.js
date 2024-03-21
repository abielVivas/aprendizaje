function busquedaBinaria(array, numBuscado) {
    var posibilidadInicial = 0;
    var posibilidadFinal = array.length;
    var encontrado = false;

    while (encontrado == false) {
        var numComparar = Math.ceil((posibilidadInicial + posibilidadFinal) / 2 -1) ;

        if (numBuscado == array[numComparar]) {
            encontrado = true;
            return `El número ${numBuscado} está en el índice ${numComparar}`
        } else if (numBuscado > array[numComparar]) {
            posibilidadInicial = numComparar + 1;
        } else if (numBuscado < array[numComparar]) {
            posibilidadFinal = numComparar - 1;
        }

        if (posibilidadInicial > posibilidadFinal) {
            return "El número no está en el array."
        }
    }
}
console.log(busquedaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

