const { restar, verificarUsuario, simularPeticionAPI } = require('./utils');


    console.log("5 - 3 =", restar(5, 3));       
    console.log("11 - 9 =", restar(11, 9));     
    console.log("2 - 5 =", restar(2, 5));      

    verificarUsuario("admin")
        .then(res => console.log(res)) 
    .catch(err => console.error(err));

    verificarUsuario("Ivan")
        .then(res => console.log(res))
        .catch(err => console.error(err)); 

async function obtenerDatos() {
    console.log("Solicitando datos...");
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}
obtenerDatos();