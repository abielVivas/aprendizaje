function busquedaLineal(array, numBuscado){
    for(i = 0; i < array.length; i++){
        if(numBuscado == array[i]){
            return `el numero ${numBuscado} esta en el indice ${i}`
        }
    }
}
console.log(busquedaLineal([1,3,5,4,7,9,47,53,6,8], 53))