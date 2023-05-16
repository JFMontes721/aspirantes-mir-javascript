let persona ={
    nombre: "Juan",
    edad: 29,
    ciudad: "Bogota" ,
    profesion: "Diseñador"
}

console.log(persona);

function presentacion(){
     
    console.log("Hola, mi nombre es " + persona.nombre + ", tengo "+ persona.edad + " años y vivo en "+ persona.ciudad);
}

let mensaje = presentacion();

console.log(mensaje);

persona.hobbies = ["jugar", "dibujar", "caminar"]

console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}