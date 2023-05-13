function join(array){

    let letras = ""; 
    for (let i = 0; i < array.length; i++) {
        
        letras= letras + array[i];
        letras= letras + " ";
        
    }
    return letras;
}
console.log(join([1, 3, 2])) // 1
console.log(join([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(join([])) // -1