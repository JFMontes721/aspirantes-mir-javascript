// escribe la función suma acá

function suma(numero){
    let sum = 0
    for (let i=1; i<= numero ; i++){
        sum = sum + i
    }

    return sum;
}

// código de prueba
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120