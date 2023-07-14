function comprarEntrada(dinero){
    const precioEntrada = 200

    if(dinero > precioEntrada){
        let vuelto = dinero - precioEntrada
        return "Gracias por tu compra, tu vuelto es: $" + vuelto
    }else if(dinero == precioEntrada){
        return "Gracias por tu compra"
    }else{
        let dineroFaltante = precioEntrada - dinero
        return "Error, te falta dinero: $" + dineroFaltante
    }
}
console.log(comprarEntrada())