let resolver = true 
let intentos = 1

do{
    let usuario = parseInt (prompt("¿Cúal es el resultado de 8 * 9? (solo 3 intentos)"))
    if(usuario === 72 && intentos <= 3){
        alert ("Correcto, el resultado es 72")
        resolver = false
        break
    }else{
        alert ("Resultado equivocado, intente de nuevo")
        intentos++
        if(intentos > 3){
            alert ("Lo siento, ya no hay mas intentos")
            break
        }
    }
}while(resolver = true)
