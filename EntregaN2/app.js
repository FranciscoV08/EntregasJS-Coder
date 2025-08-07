const productos = []

// Selecciono el elemento donde imprimir lista
const sectionProducto = document.getElementById("listaProductos");

const btn = document.getElementById("btnGenerar");


// Funcion para crear el precio
const crearPrecio = (e) => {
    // Prevenimos la accion popr default
    e.preventDefault()
    // Limpiamos para volver a iterar el array
    sectionProducto.innerHTML =""
    // selectores del formulario
    const nombreForm = document.getElementById("nombreProd").value;
    const precioForm = document.getElementById("precioProd").value;
    const profitForm = document.getElementById("profitProd").value;
    const ivaForm = document.getElementById("ivaProd").value;

    let totalIVA = 0;
    
    if (profitForm <= 0 || profitForm >=60) {
        return alert("El profit tiene que estar en un rango de 1 - 59 %")
    }

    // calcula el precio en base a la inversion al producto y el porcentaje a ganar
   const total = calcularPrecioVenta(precioForm, profitForm)
   
    // agregarle iva
    totalIVA = calcularIva(total)

    const newProducto = {
        producto: nombreForm,
        precio: profitForm,
        precioIVA: totalIVA,
        precioTotal: total
    }
    console.log(newProducto)
    productos.push(newProducto)
    listaProductos()
}

// Imprimir el array de obj
const listaProductos = () => {
    if (productos.length >= 0) {
        productos.forEach((prod) => {

            const h2 = document.createElement("h2")
            const p = document.createElement("p")
            const parrafo2 = document.createElement("p")

            h2.textContent = `El producto: ${prod.producto}`;
            p.textContent = `Tendra un precio de ${prod.precioTotal}ARS`
            parrafo2.textContent = `El precio del producto con IVA: ${prod.precioIVA}`

            sectionProducto.appendChild(h2)
            sectionProducto.appendChild(p)
            sectionProducto.appendChild(parrafo2)
        })

    } else {
        console.log("No existen productos en la lista")
    }
}

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
const calcularPrecioVenta = (precio, rendimiento) => {
    const precioVenta =  (precio * rendimiento) / 100;
    // Sumamos la ganancia con el costo del producto y sacamos el total
    const total = Number(precio) + precioVenta

    return total;
}


// EVENTOS
btn.addEventListener("click", crearPrecio)