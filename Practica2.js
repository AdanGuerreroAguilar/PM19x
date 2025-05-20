const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    cidudad: "Querétaro", 
    pais: "Mexico"
  }
};

const { nombre, edad, direccion } = persona;
const { cidudad, pais } = direccion;

console.log(`Me llamo ${nombre}, tengo ${edad} años, vivo en ${cidudad}, ${pais}.`);


 /* ----------------
  Ejercicio b
*/
/*const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

const nombresFiltrados = productos.filter(producto => producto.precio > 1000).map(producto => producto.nombre);

console.log(nombresFiltrados);


----------------
Ejercicio c

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 },
];

const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis);

personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

const totalEdades = personas.reduce((acumulador, persona) => {
  return acumulador + persona.edad;
}, 0);

console.log(`La suma total de las edades es: ${totalEdades}`);

*/

