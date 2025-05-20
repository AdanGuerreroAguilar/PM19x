/*const persona = {
    nombre: "Adan Guerrero",
    edad: 22,
    ciudad: "Querétaro"
  };
  const { nombre, edad, ciudad } = persona;
  console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
 

  ----------------
  Ejercicio b
*/
const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

const nombresFiltrados = productos.filter(producto => producto.precio > 1000).map(producto => producto.nombre);

console.log(nombresFiltrados);


