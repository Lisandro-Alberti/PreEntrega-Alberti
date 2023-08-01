const Juegos = function (nombre,precio,stock){
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock
}

let juegos1 = new Juegos ("Spider-Man 2", 20000, 10)
let juegos2 = new Juegos ("Resident Evil 4", 17000, 6)
let juegos3 = new Juegos ("EA Sports FC 24", 23000, 15)
let juegos4 = new Juegos ("Gran Turismo 7", 14000, 8)

let listaJuegos = [juegos1,juegos2,juegos3,juegos4]

function buscarJuego(){
    let palabraClave = prompt("Ingrese el nombre del juego que busca").trim().toUpperCase()
    let resultado = listaJuegos.filter((Juegos)=>Juegos.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No se encontro el juego: " + palabraClave)
    }
}


function agregarJuego(){

    let nombre = prompt("Ingrega el nombre del juego").trim()
    let precio = parseInt(prompt("Ingrese el precio del juego: "))
    let stock = parseInt(prompt("Ingrese el stock"))

    if(isNaN(precio) || isNaN(stock) || nombre === ""){
        alert("Ingrese valores validos")
        return
    } 

    let juegosNew = new Juegos(nombre,precio,stock)

    if(listaJuegos.some((i)=> i.nombre === Juegos.nombre)){
        alert("El juego ya existe en la lista")
        return
    }

    listaJuegos.push(juegosNew)

    console.table(listaJuegos)
}