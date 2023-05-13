// escribe la función maxIndex acá

function maxIndex(array){
    
    if (array.length ==0) {
        return-1;
    }

    let mayor =array[0];
    let indice= 0;
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > mayor){
            mayor = array[i];
            indice = i;
        }
    }
    return indice;
 }

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1