
function comprarEntrada(dinero){
    const precioEntrada = 200

if(dinero > precioEntrada){
    let cambio = dinero - precioEntrada
    return "compra exitosa, tu vuelto es: $" + cambio
}else if(dinero < precioEntrada){
    let dineroFaltante = precioEntrada - dinero
    return "No alcanzó, te falta: $" + dineroFaltante
}else{
    return "Gracias por tu compra" 
}
}

console.log(comprarEntrada(200))