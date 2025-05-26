function restar(a, b) {
    return a - b;
  }
  
  module.exports = { restar,verificarUsuario,simularPeticionAPI };
  

function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
             resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
     }
   });
}

function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000); 
  });
}