function metodoPorInsercion(array){
    for(i = 1; i < array.length; i++){
       var j = i - 1
       var caja
       while(array[i] < array[j] ){
           
           if (array[i] < array[j]) {
               caja = array[i]
               array[i] = array[j]
               array[j] = caja
           }
           i--; 
           j--;
       }
    }
    return array
   }
   console.log(metodoPorInsercion([4,5,93,83,15,13,1,8,7,9,12,2]))