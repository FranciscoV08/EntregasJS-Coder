// Entrada de datos
const producto = prompt("Ingrese el nombre del producto");
const costoProducto = prompt("Ingrese el costo del producto");
const rendimiento = prompt("ingrese el porcentaje que desea ganar sobre el producto");

// Funcion para calcular el iva
const calcularIva = (valor) => {
    // validamos el tipo de dato ingresado
    if(valor == null || valor == undefined || valor == "" || isNaN(valor)){
        console.log(">>ERROR>> | No fue ingresado un valor valido")
        // En caso de entrar aqui lo detenemos con un return
        return;
    }else  if(valor <= 100){
        console.log("ERROR | El valor del producto debe ser mayor a ", valor )
        return;

    }

    // en caso de pasar la validacion calculamos el iva 21%
    const iva = 1.21;
    const resultado = valor * iva;

    // Mostamos en consola el resultado
    console.log("El precio junto a IVA: ", `$${resultado} ARG `)
    return resultado
}


const calcularPrecioVenta = (rendimiento) => {
    if(producto == null || producto == undefined || producto == ""){
         console.log(">>ERROR>> | No fue ingresado un nombre de producto valido")
        return
    }else if(rendimiento == null || rendimiento == undefined || rendimiento == "" || isNaN(rendimiento)){
        console.log(">>ERROR>> | No fue ingresado un valor valido")
        return
        // En caso de entrar aqui lo detenemos con un return
    }else  if(rendimiento <= 0){
        console.log("ERROR | El valor del producto debe ser mayor a ", valor )
        return
    }

    //cuando pasamos la validacion, calculamos el porcentaje de ganancia 
    const precioVenta =  (costoProducto * rendimiento) / 100;
    // Sumamos la ganancia con el costo del producto y sacamos el total
    const total = Number(costoProducto) + precioVenta
    console.log(`El precio de venta del producto "${producto}" es: $${total}ARG`)

    const pregunta = prompt("¿Desea calcular el IVA del producto? (si/no)");
    // Validamos la respuesta en cada caso 
    switch (pregunta){
        case "si":
            const productoIva = Math.round(calcularIva(total));
            console.log(`<-----El producto deberia tener un precio de venta de: $${productoIva} ARG----->`)
        break;
        
        case "no":
            console.log(`<-----El producto tiene un precio de venta "Sin IVA" de $${total} ARG ----->`)
        break;
        default:
            console.log(">>ERROR<< debe ingresar una respuesta valida (si/no)")
        break;
    }

}
calcularPrecioVenta(rendimiento);