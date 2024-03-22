
function busquedaBinariaConProgramacionFuncional (array, numBuscado){
    console.log(array, Math.round(array.length/2));
    if( numBuscado == array[Math.round(array.length/2)] ){
        console.log( `el numero ${numBuscado} esta en el array` )
    }
    else if( numBuscado > Math.round(array.length/2) ){
        busquedaBinariaConProgramacionFuncional( array.slice(Math.round(array.length/2), array.length), numBuscado);
    }
    else{
        busquedaBinariaConProgramacionFuncional(array.slice(0, Math.round(array.length/2), numBuscado));
    }
}



busquedaBinariaConProgramacionFuncional([1 ,2 ,3 ,4 ,5, 6, 7, 8, 9] , 8)