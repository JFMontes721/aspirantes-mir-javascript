let pedro  = {
    nombre: "Pedro Perez",
    edad:30,
    activo: true,
    hobbies: ["programar","squash","piano"],
    
}

console.log(pedro.edad);

pedro.estatura = 1.8;

delete pedro.activo;

for (let llave in pedro) {
    console.log(`${llave}: ${pedro[llave]}`);
}

pedro.saluda = function saluda(){
    console.log("Hola me llamo " + pedro.nombre);
}
pedro.saluda();