/Arrays necesarios
const helado = [];
let carrito = [];


//Objeto

class HeladoCom{
    constructor(id, nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}
//FUNCIONES
// agregar elementos al carrito

function heladoAlCarrito(helado){
    carrito.push(helado);
}

//Función para que cada botón agregue un helado específico
function controlSwitch(numeroBoton){
    switch(numeroBoton){
        case 1:
            heladoAlCarrito(helado[0]);
            actualizarCarrito()
            break;
        case 2:
            heladoAlCarrito(helado[1]);
            actualizarCarrito()
            break;
        case 3:
            heladoAlCarrito(helado[2]);
            actualizarCarrito()
            break;
        case 4:
            heladoAlCarrito(heado[3]);
            actualizarCarrito()
            break;
        case 5:
            heladoAlCarrito(helado[4]);
            actualizarCarrito()
            break;
        default:
            break;
    }
}; 

//función para sumar precios del carrito

function calcularPrecio(){
    let precios = carrito.map(n => n.precio)
    let total = precios.reduce((acumulador, elemento) => acumulador + elemento, 0)
    let preciosIva = carrito.map(n => n.precio*1.19)
    let totalIva = preciosIva.reduce((acumulador2, elemento2) => acumulador2+ elemento2, 0)
    return [total, totalIva];
}

//función para mostrar helados en el carrito

const contenedorCarrito = document.querySelector(".carrito-compras");
function actualizarCarrito(){
    contenedorCarrito.innerHTML = "";
    for (const e of carrito) {
        let divConCarrito = document.createElement("div");
        divConCarrito.classList.add("contenedor-carrito");
        divConCarrito.innerHTML = `<h3 class="titulo-helado" id="titulo-heladocarrito${carrito.indexOf(e) + 1}">${e.nombre}</h3>
        <p class="descrip-helado" id="descrip-heladocarrito${carrito.indexOf(e) + 1}"> Precio: $${e.precio}</p>
        <button type="submit" class="boton-eliminar" id="eliminar${carrito.indexOf(e)+1}">Eliminar del carrito</button>`;
        contenedorCarrito.appendChild(divConCarrito);
        document.querySelector(`#eliminar${carrito.indexOf(e)+1}`).addEventListener("click", ()=> eliminarheladocarrito(carrito.indexOf(e)));
    }
    let contadorhelado = document.createElement("p");
    contadorhelado.innerText = `Número de helados en el carrito: ${carrito.length}`;
    contenedorCarrito.prepend(contadorhelado);
    
    let mostrarPrecios = document.createElement("p");
    mostrarPrecios.innerText = `Precio total sin impuestos: $${calcularPrecio()[0]}. precio total más iva: $${calcularPrecio()[1]}`
    contenedorCarrito.append(mostrarPrecios);

    localStorage.setItem("carritoLS", JSON.stringify(carrito))
}

//Función para eliminar helados del carrito
function eliminarheladocarrito(indicehelado){
    carrito.splice(indicehelado, 1);
    actualizarCarrito();
}


//Carga de los helados al array. 

helado.push(new HeladoCom(1, "Helado", "1 kilo", 4000)) 
helado.push(new HeladoCom(2, "Helado", "1/2 kilo", 3000)) 
helado.push(new HeladoCom(3, "Helado", "1/4 kilo", 2500)) 
helado.push(new HeladoCom(4, "Promo", "1 kilo + 1/4 kilo", 4500)) 
helado.push(new HeladoCom(5, "Cucuruchos", "x3", 300))

dis
//mostrar helados en la página.
const contenedorProductos = document.querySelector(".listado-helados");
for (const helados of helados) {
    let divConHelados = document.createElement("div");
    divConHelados.classList.add("contenedor-helado");
    divConHelados.innerHTML = `<h3 class="titulo-helado" id="titulo-helado${helado.indexOf(helado) + 1}">${helado.nombre}</h3>
                        <p class="descrip-helado" id="descrip-helado${helado.indexOf(helado) + 1}" Precio: $${helado.precio}</p>
                        <button type="submit" class="boton-agregar" id="agregar${helado.indexOf(helado) + 1}">Agregar al carrito</button>`;
    contenedorProductos.appendChild(divConHelados);
}

//Agregar eventos de escucha a cada botón para agregar helados al carrito

document.querySelector("#agregar1").addEventListener("click", ()=> controlSwitch(1));
document.querySelector("#agregar2").addEventListener("click", ()=> controlSwitch(2));
document.querySelector("#agregar3").addEventListener("click", ()=> controlSwitch(3));
document.querySelector("#agregar4").addEventListener("click", ()=> controlSwitch(4));
document.querySelector("#agregar5").addEventListener("click", ()=> controlSwitch(5));

//Carga del localStorage

if(localStorage.getItem("carritoLS") != null){
    carrito = JSON.parse(localStorage.getItem("carritoLS"))
    actualizarCarrito()
}