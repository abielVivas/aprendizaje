function ordenarXMetodoBurbuja(array){

    var detenerse = false
    while(detenerse == false){
        let order = true;
        let i = 0;
        while (i < (array.length - 1)){
            var j = i + 1
            var caja1
            if(array[i] > array[j]){
                caja1 = array[j]
                array[j] = array[i] 
                array[i] = caja1
                order = false;
            }
            i++;
        }
        if (order){
            break;
        }
    }
    return array
}

console.log(ordenarXMetodoBurbuja([1,2,5,7,3,6,29,0]));