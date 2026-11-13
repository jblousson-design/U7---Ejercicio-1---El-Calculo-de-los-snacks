let edadActual = 18;
let edadMaxima = 90;
let snackFavorito = "papas fritas";
let snacksPorDia = 2;
let anosRestantes = edadMaxima - edadActual;
let cantidadFinal = anosRestantes * 365 * snacksPorDia;

alert(`Necesitarás ${cantidadFinal} de ${snackFavorito} para que te alcancen hasta los ${edadMaxima} años.`);

let precioPorUnidad = 1200;
let gastoTotal = cantidadFinal * precioPorUnidad;

alert(`Vas a gastar un total de $${gastoTotal} en ${snackFavorito} a lo largo de tu vida.`);
console.log(`Gasto total estimado: $${gastoTotal}`);